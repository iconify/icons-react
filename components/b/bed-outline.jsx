import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe9tqcc4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fe9tqcc4u"/>`,
		"fallback": "flowbite:bed-outline",
	});
}

export default Component;
