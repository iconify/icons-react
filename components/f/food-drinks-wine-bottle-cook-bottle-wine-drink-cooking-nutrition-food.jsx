import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r411-ob2p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r411-ob2p"/>`,
		"fallback": "streamline:food-drinks-wine-bottle-cook-bottle-wine-drink-cooking-nutrition-food",
	});
}

export default Component;
