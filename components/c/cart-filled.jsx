import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whjp1dbgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whjp1dbgi"/>`,
		"fallback": "boxicons:cart-filled",
	});
}

export default Component;
