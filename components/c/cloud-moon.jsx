import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pft7nnb9f.css';
import '../../css/f/fxi-0pbzv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pft7nnb9f"/><path class="fxi-0pbzv"/></g>`,
		"fallback": "bi:cloud-moon",
	});
}

export default Component;
