import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pw0pxcbyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pw0pxcbyo"/>`,
		"fallback": "mdi:calendar-filter",
	});
}

export default Component;
