import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9l9ao62c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9l9ao62c"/>`,
		"fallback": "energy-icons:energy-rating-20-bold",
	});
}

export default Component;
