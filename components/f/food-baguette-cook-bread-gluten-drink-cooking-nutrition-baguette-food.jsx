import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkk9kobqk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkk9kobqk"/>`,
		"fallback": "streamline:food-baguette-cook-bread-gluten-drink-cooking-nutrition-baguette-food",
	});
}

export default Component;
