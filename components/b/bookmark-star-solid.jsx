import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5q7sxb4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5q7sxb4t"/>`,
		"fallback": "iconaut:bookmark-star-solid",
	});
}

export default Component;
