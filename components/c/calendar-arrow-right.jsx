import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xijjq8bbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xijjq8bbb"/>`,
		"fallback": "mdi:calendar-arrow-right",
	});
}

export default Component;
