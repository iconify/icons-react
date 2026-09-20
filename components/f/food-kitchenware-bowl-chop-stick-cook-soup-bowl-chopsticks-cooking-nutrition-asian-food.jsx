import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6aqm4bjy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6aqm4bjy"/>`,
		"fallback": "streamline:food-kitchenware-bowl-chop-stick-cook-soup-bowl-chopsticks-cooking-nutrition-asian-food",
	});
}

export default Component;
