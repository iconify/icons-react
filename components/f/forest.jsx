import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-g8wbgam.css';
import '../../css/c/cuyn6tgcc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGwVnWtYIz" class="e-g8wbgam"/></defs><g class="cuyn6tgcc"><use href="#SVGwVnWtYIz"/><use href="#SVGwVnWtYIz"/></g>`,
		"fallback": "healthicons:forest",
	});
}

export default Component;
