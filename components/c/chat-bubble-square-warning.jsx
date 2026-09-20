import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_3ftvb8x.css';
import '../../css/v/vuff2c6ir.css';
import '../../css/g/g8pbsyb3m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p_3ftvb8x"/><path class="vuff2c6ir"/><path class="g8pbsyb3m"/></g>`,
		"fallback": "streamline-color:chat-bubble-square-warning",
	});
}

export default Component;
