import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jfizd9rkn.css';
import '../../css/h/hqk_ihb6n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="jfizd9rkn"/><path class="hqk_ihb6n"/></g>`,
		"fallback": "streamline:food-water-melon-cook-plant-plants-drink-cooking-nutrition-watermelon-fruit-vegetarian-food",
	});
}

export default Component;
