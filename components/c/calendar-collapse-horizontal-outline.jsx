import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbkzq4bfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbkzq4bfr"/>`,
		"fallback": "mdi:calendar-collapse-horizontal-outline",
	});
}

export default Component;
