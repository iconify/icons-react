import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/g6ee74ici.css';
import '../../css/d/dr_nuqozz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><ellipse class="g6ee74ici"/><path class="dr_nuqozz"/></g>`,
		"fallback": "streamline:food-kitchenware-fork-spoon-fork-spoon-food-dine-cook-utensils-eat-restaurant-dining",
	});
}

export default Component;
