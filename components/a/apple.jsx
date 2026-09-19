import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8ohewbfz.css';
import '../../css/c/cuyn6tgcc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVG67go7b2R" class="s8ohewbfz"/></defs><g class="cuyn6tgcc"><use href="#SVG67go7b2R"/><use href="#SVG67go7b2R"/></g>`,
		"fallback": "bi:apple",
	});
}

export default Component;
