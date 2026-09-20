import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv0c3kbte.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv0c3kbte"/>`,
		"fallback": "streamline:food-drinks-tea-cup-herbal-cook-tea-tisane-cup-drink-cooking-nutrition-mug-food",
	});
}

export default Component;
