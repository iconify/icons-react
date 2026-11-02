import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar4fpmb9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ar4fpmb9l"/>`,
		"fallback": "mingcute:coupon-fill",
	});
}

export default Component;
