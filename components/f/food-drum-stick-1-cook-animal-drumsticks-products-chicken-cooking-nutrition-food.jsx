import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8mvphghl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8mvphghl"/>`,
		"fallback": "streamline:food-drum-stick-1-cook-animal-drumsticks-products-chicken-cooking-nutrition-food",
	});
}

export default Component;
