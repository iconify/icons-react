import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epqu04bsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epqu04bsg"/>`,
		"fallback": "mdi:crop-rotate",
	});
}

export default Component;
