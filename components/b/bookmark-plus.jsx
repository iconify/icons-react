import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_l8fib7s.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_l8fib7s"/>`,
		"fallback": "jam:bookmark-plus",
	});
}

export default Component;
