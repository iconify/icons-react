import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijmtp_b3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijmtp_b3w"/>`,
		"fallback": "mdi:food-off",
	});
}

export default Component;
