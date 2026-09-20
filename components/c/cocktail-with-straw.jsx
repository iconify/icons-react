import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5-e9pb9h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5-e9pb9h"/>`,
		"fallback": "pinhead:cocktail-with-straw",
	});
}

export default Component;
