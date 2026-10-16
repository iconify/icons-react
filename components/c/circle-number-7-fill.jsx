import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/muqh26bxs.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2kvgvbvc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVG70jmudZm" class="muqh26bxs"/></defs><g class="cuyn6tgcc"><use href="#SVG70jmudZm"/><use href="#SVG70jmudZm" clip-rule="evenodd" class="d2kvgvbvc"/></g>`,
		"fallback": "gravity-ui:circle-number-7-fill",
	});
}

export default Component;
