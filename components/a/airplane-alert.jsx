import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icm1kqhqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icm1kqhqz"/>`,
		"fallback": "mdi:airplane-alert",
	});
}

export default Component;
