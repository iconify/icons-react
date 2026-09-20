import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n7d0-6b3l.css';
import '../../css/n/n5fjpab4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n7d0-6b3l"/><path class="n5fjpab4o"/></g>`,
		"fallback": "solar:chat-round-unread-bold",
	});
}

export default Component;
