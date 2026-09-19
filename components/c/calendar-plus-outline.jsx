import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyhd5yy6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nyhd5yy6s"/>`,
		"fallback": "flowbite:calendar-plus-outline",
	});
}

export default Component;
