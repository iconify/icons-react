import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slq6yjsci.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slq6yjsci"/>`,
		"fallback": "streamline:food-kitchenware-no-food-allowed-fork-spoon-food-dine-cook-utensils-eat-restaurant-not-allowed",
	});
}

export default Component;
