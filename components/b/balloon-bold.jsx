import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jaxqo675c.css';
import '../../css/v/vnpoxsb4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jaxqo675c"/><path clip-rule="evenodd" class="vnpoxsb4l"/></g>`,
		"fallback": "solar:balloon-bold",
	});
}

export default Component;
