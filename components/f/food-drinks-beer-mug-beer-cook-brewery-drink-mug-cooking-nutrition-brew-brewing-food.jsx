import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eo7tz9b6z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eo7tz9b6z"/>`,
		"fallback": "streamline:food-drinks-beer-mug-beer-cook-brewery-drink-mug-cooking-nutrition-brew-brewing-food",
	});
}

export default Component;
