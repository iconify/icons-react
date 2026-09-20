import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/toq4hu3wa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="toq4hu3wa"/>`,
		"fallback": "ri:coupon-4-line",
	});
}

export default Component;
