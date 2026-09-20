import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/p/pjqgfu9mr.css';
import '../../css/d/d7w1vj4gr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="pjqgfu9mr"/><path class="d7w1vj4gr"/></g>`,
		"fallback": "proicons:cursor-click",
	});
}

export default Component;
