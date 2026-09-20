import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t_roi2bop.css';
import '../../css/x/x-blg6bci.css';
import '../../css/x/xx1mfbceb.css';
import '../../css/x/xng98kbze.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t_roi2bop"/><path class="x-blg6bci"/><path class="xx1mfbceb"/><path class="xng98kbze"/></g>`,
		"fallback": "streamline-color:chat-bubble-square-write",
	});
}

export default Component;
