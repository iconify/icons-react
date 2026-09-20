import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y00yb5b9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y00yb5b9o"/>`,
		"fallback": "mdi:food-takeout-box-outline",
	});
}

export default Component;
