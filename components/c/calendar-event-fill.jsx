import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-sn0nb9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-sn0nb9e"/>`,
		"fallback": "ri:calendar-event-fill",
	});
}

export default Component;
