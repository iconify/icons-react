import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jq1jgxb2q.css';
import '../../css/d/dr1n896-j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jq1jgxb2q"/><path class="dr1n896-j"/></g>`,
		"fallback": "heroicons:chat-bubble-left-right-20-solid",
	});
}

export default Component;
