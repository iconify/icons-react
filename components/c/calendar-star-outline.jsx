import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozb6knb9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozb6knb9k"/>`,
		"fallback": "mdi:calendar-star-outline",
	});
}

export default Component;
