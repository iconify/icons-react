import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfzqp5zje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfzqp5zje"/>`,
		"fallback": "bx:bxl-squarespace",
	});
}

export default Component;
