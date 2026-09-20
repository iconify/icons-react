import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sh6v-h_xx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sh6v-h_xx"/>`,
		"fallback": "mdi:camera-iris",
	});
}

export default Component;
