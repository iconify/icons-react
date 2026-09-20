import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sty21ibsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sty21ibsk"/>`,
		"fallback": "solar:hearts-linear",
	});
}

export default Component;
