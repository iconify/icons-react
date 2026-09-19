import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/ddyqp3b5f.css';
import '../../css/e/e3q5gacib.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ddyqp3b5f"/><path class="e3q5gacib"/></g>`,
		"fallback": "bi:building-fill-dash",
	});
}

export default Component;
