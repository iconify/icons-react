import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/huaq-dbyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="huaq-dbyh"/>`,
		"fallback": "mdi:food-drumstick-outline",
	});
}

export default Component;
