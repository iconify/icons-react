import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ra_a-eb3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ra_a-eb3h"/>`,
		"fallback": "mdi:contactless-payment-circle",
	});
}

export default Component;
