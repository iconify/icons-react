import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2gy9obur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2gy9obur"/>`,
		"fallback": "mingcute:helicopter-line",
	});
}

export default Component;
