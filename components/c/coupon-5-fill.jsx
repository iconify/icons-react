import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kz9_n9bru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kz9_n9bru"/>`,
		"fallback": "ri:coupon-5-fill",
	});
}

export default Component;
