import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/r0vz41bvm.css';
import '../../css/o/o5_7zf4vq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="r0vz41bvm"/><path class="o5_7zf4vq"/></g>`,
		"fallback": "streamline:food-kitchenware-spoon-plate-fork-plate-food-dine-cook-utensils-eat-restaurant-dining",
	});
}

export default Component;
