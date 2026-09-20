import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ratxvpbnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ratxvpbnr"/>`,
		"fallback": "mdi:camera-flip-outline",
	});
}

export default Component;
