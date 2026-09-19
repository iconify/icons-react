import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fcwy8u_ql.css';
import '../../css/z/zaso4kzrh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fcwy8u_ql"/><path class="zaso4kzrh"/></g>`,
		"fallback": "bi:chat-right-text",
	});
}

export default Component;
