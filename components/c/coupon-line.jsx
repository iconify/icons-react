import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6u3xlubt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6u3xlubt"/>`,
		"fallback": "ri:coupon-line",
	});
}

export default Component;
