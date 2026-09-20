import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejy92px3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejy92px3x"/>`,
		"fallback": "mdi:calendar-lock-outline",
	});
}

export default Component;
