import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hj-nilb8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hj-nilb8u"/>`,
		"fallback": "flowbite:arrow-down-to-bracket-outline",
	});
}

export default Component;
