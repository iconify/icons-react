import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmr5q4b7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmr5q4b7u"/>`,
		"fallback": "iconamoon:comment-remove-bold",
	});
}

export default Component;
