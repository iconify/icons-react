import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ncksuebdx.css';
import '../../css/o/osmkfacmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ncksuebdx"/><path class="osmkfacmr"/></g>`,
		"fallback": "solar:chat-unread-bold",
	});
}

export default Component;
