import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzmxtt7ys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzmxtt7ys"/>`,
		"fallback": "mingcute:calendar-day-fill",
	});
}

export default Component;
