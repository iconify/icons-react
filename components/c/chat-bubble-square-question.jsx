import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_3ftvb8x.css';
import '../../css/j/jjsrfidrd.css';
import '../../css/g/gcsjcipia.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p_3ftvb8x"/><path class="jjsrfidrd"/><path class="gcsjcipia"/></g>`,
		"fallback": "streamline-color:chat-bubble-square-question",
	});
}

export default Component;
