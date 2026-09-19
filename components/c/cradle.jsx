import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f086w4b8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f086w4b8m"/>`,
		"fallback": "griddy-icons:cradle",
	});
}

export default Component;
