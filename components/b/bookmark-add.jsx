import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bt6q9oj5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bt6q9oj5o"/>`,
		"fallback": "mdi:bookmark-add",
	});
}

export default Component;
