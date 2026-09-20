import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjpbtbv7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjpbtbv7s"/>`,
		"fallback": "token:arbitrum-nova",
	});
}

export default Component;
