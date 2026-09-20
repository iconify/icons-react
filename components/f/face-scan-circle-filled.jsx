import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vtemd4acu.css';
import '../../css/y/yw6iesbgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vtemd4acu"/><path class="yw6iesbgx"/></g>`,
		"fallback": "reicon:face-scan-circle-filled",
	});
}

export default Component;
