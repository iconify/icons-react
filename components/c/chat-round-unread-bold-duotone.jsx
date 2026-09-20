import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/ja_0od71p.css';
import '../../css/f/f21tv2b9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ja_0od71p"/><path class="f21tv2b9s"/></g>`,
		"fallback": "solar:chat-round-unread-bold-duotone",
	});
}

export default Component;
