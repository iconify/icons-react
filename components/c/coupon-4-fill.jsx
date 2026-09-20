import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d50fphn0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d50fphn0t"/>`,
		"fallback": "ri:coupon-4-fill",
	});
}

export default Component;
