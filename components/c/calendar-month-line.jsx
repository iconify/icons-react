import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5z2d8bzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5z2d8bzm"/>`,
		"fallback": "mingcute:calendar-month-line",
	});
}

export default Component;
