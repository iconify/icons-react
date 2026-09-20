import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylpowi0yz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylpowi0yz"/>`,
		"fallback": "mdi:arrow-u-up-right-bold",
	});
}

export default Component;
