import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_bx7palg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_bx7palg"/>`,
		"fallback": "streamline:food-drinks-cocktail-glass-cook-alcohol-food-cocktail-drink-cooking-alcoholic-beverage-glass",
	});
}

export default Component;
