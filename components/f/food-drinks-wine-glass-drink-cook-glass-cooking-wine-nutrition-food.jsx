import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xu06apb_h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xu06apb_h"/>`,
		"fallback": "streamline:food-drinks-wine-glass-drink-cook-glass-cooking-wine-nutrition-food",
	});
}

export default Component;
