import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hik8q7bzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hik8q7bzf"/>`,
		"fallback": "bx:bxl-linkedin-square",
	});
}

export default Component;
