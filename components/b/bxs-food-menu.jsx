import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c210-8tfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c210-8tfy"/>`,
		"fallback": "bx:bxs-food-menu",
	});
}

export default Component;
