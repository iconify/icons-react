import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4ac1nk3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4ac1nk3s"/>`,
		"fallback": "mdi:bookmark-off",
	});
}

export default Component;
