import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j29jv6bka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j29jv6bka"/>`,
		"fallback": "bxs:car-wash",
	});
}

export default Component;
