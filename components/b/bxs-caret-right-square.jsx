import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3yk_lb9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3yk_lb9u"/>`,
		"fallback": "bx:bxs-caret-right-square",
	});
}

export default Component;
