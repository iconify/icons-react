import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekdeobvfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekdeobvfm"/>`,
		"fallback": "mingcute:calendar-month-fill",
	});
}

export default Component;
