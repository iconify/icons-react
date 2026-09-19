import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fy5-l_xmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fy5-l_xmz"/>`,
		"fallback": "flowbite:icecream-alt-outline",
	});
}

export default Component;
