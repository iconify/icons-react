import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7i07eb_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7i07eb_l"/>`,
		"fallback": "ri:coupon-fill",
	});
}

export default Component;
