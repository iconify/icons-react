import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ana4hn6qi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ana4hn6qi"/>`,
		"fallback": "mdi:account-payment-outline",
	});
}

export default Component;
