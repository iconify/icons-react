import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e3q5gacib.css';
import '../../css/z/zkxlt7buh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e3q5gacib"/><path class="zkxlt7buh"/></g>`,
		"fallback": "bi:building-fill-gear",
	});
}

export default Component;
