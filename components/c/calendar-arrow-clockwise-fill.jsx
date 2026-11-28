import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_8f_-b9v.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_8f_-b9v"/>`,
		"fallback": "pullo:calendar-arrow-clockwise-fill",
	});
}

export default Component;
