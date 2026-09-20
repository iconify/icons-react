import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gri8edcmq.css';
import '../../css/l/lct5b-bwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="gri8edcmq"/><path class="lct5b-bwm"/></g>`,
		"fallback": "streamline-freehand:design-tool-stamp",
	});
}

export default Component;
