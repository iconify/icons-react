import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drw4bvb6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drw4bvb6e"/>`,
		"fallback": "mdi:calendar-week-begin-outline",
	});
}

export default Component;
