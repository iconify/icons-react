import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eo6461byx.css';
import '../../css/y/yqepedcta.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eo6461byx"/><path class="yqepedcta"/></g>`,
		"fallback": "bi:chat-left-heart",
	});
}

export default Component;
