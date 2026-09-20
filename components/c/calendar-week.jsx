import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6fwrqe6x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6fwrqe6x"/>`,
		"fallback": "la:calendar-week",
	});
}

export default Component;
