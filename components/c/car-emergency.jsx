import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzi-d4bgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzi-d4bgr"/>`,
		"fallback": "mdi:car-emergency",
	});
}

export default Component;
