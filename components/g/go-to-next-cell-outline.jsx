import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fynt03bco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fynt03bco"/>`,
		"fallback": "flowbite:go-to-next-cell-outline",
	});
}

export default Component;
