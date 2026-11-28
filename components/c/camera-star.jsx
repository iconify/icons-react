import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihyqh-94e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihyqh-94e"/>`,
		"fallback": "noviair-light:camera-star",
	});
}

export default Component;
