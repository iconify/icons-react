import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e51pr79qy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e51pr79qy"/>`,
		"fallback": "ri:calendar-schedule-line",
	});
}

export default Component;
