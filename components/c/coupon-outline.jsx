import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y96e-6bmi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y96e-6bmi"/>`,
		"fallback": "lsicon:coupon-outline",
	});
}

export default Component;
