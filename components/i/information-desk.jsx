import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qjn4lmb3e.css';
import '../../css/h/hs-44vb5a.css';
import '../../css/l/l24rfvyhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qjn4lmb3e"/><path class="hs-44vb5a"/><path class="l24rfvyhn"/></g>`,
		"fallback": "streamline-freehand:information-desk",
	});
}

export default Component;
