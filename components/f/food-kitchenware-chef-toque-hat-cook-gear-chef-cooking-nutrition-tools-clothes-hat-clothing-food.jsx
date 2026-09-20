import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/buzv4bcej.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="buzv4bcej"/>`,
		"fallback": "streamline:food-kitchenware-chef-toque-hat-cook-gear-chef-cooking-nutrition-tools-clothes-hat-clothing-food",
	});
}

export default Component;
