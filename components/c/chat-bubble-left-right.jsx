import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g55cccb1l.css';
import '../../css/r/rluz9rb9p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g55cccb1l"/><path class="rluz9rb9p"/></g>`,
		"fallback": "heroicons-solid:chat-bubble-left-right",
	});
}

export default Component;
