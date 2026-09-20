import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyaawlnzy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gyaawlnzy"/>`,
		"fallback": "streamline:food-burger-drink-burger-fast-cook-cooking-nutrition-food",
	});
}

export default Component;
