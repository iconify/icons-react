import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db-202bme.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="db-202bme"/>`,
		"fallback": "la:calendar-plus",
	});
}

export default Component;
