import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsijaab7s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsijaab7s"/>`,
		"fallback": "streamline:food-drinks-cocktail-1-cook-alcohol-food-cocktail-drink-cooking-nutrition-alcoholic-beverage-glass",
	});
}

export default Component;
