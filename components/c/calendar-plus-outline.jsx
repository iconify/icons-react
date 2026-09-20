import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/su5y6qvyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="su5y6qvyn"/>`,
		"fallback": "mdi:calendar-plus-outline",
	});
}

export default Component;
