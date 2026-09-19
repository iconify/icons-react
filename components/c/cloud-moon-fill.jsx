import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/upzir9bjp.css';
import '../../css/f/fxi-0pbzv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="upzir9bjp"/><path class="fxi-0pbzv"/></g>`,
		"fallback": "bi:cloud-moon-fill",
	});
}

export default Component;
