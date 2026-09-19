import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iszbkpbtf.css';
import '../../css/z/zaso4kzrh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iszbkpbtf"/><path class="zaso4kzrh"/></g>`,
		"fallback": "bi:chat-square-text",
	});
}

export default Component;
