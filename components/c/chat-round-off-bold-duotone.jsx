import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n1nke0bvm.css';
import '../../css/r/r3wyeybaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n1nke0bvm"/><path class="r3wyeybaq"/></g>`,
		"fallback": "solar:chat-round-off-bold-duotone",
	});
}

export default Component;
