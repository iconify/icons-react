import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7_c5ho3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7_c5ho3u"/>`,
		"fallback": "mdi:account-payment",
	});
}

export default Component;
