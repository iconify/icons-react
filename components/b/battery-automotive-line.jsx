import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jo71ltb8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jo71ltb8t"/>`,
		"fallback": "mingcute:battery-automotive-line",
	});
}

export default Component;
