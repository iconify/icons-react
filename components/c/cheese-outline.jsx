import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izu-4o1ct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izu-4o1ct"/>`,
		"fallback": "flowbite:cheese-outline",
	});
}

export default Component;
