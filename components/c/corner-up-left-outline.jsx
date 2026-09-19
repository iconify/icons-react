import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3j4zebqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3j4zebqn"/>`,
		"fallback": "eva:corner-up-left-outline",
	});
}

export default Component;
