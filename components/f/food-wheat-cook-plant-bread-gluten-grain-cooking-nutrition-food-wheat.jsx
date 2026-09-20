import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j61_c6bws.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j61_c6bws"/>`,
		"fallback": "streamline:food-wheat-cook-plant-bread-gluten-grain-cooking-nutrition-food-wheat",
	});
}

export default Component;
