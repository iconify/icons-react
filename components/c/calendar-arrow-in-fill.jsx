import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8giv7biv.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p8giv7biv"/>`,
		"fallback": "pullo:calendar-arrow-in-fill",
	});
}

export default Component;
