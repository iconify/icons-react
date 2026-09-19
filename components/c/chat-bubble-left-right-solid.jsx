import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j2r6e5bih.css';
import '../../css/e/epk-jvhvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j2r6e5bih"/><path class="epk-jvhvb"/></g>`,
		"fallback": "heroicons:chat-bubble-left-right-solid",
	});
}

export default Component;
