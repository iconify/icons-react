import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe0-w_bbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fe0-w_bbe"/>`,
		"fallback": "mdi:camera-rear",
	});
}

export default Component;
