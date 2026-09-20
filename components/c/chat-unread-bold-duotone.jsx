import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/ja_0od71p.css';
import '../../css/x/x78mwzvpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ja_0od71p"/><path class="x78mwzvpu"/></g>`,
		"fallback": "solar:chat-unread-bold-duotone",
	});
}

export default Component;
