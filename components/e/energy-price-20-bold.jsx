import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-wcb8bfh.css';
import '../../css/i/iuu9occ8e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-wcb8bfh"/><path class="iuu9occ8e"/>`,
		"fallback": "energy-icons:energy-price-20-bold",
	});
}

export default Component;
