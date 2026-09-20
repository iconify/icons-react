import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr0zv381u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zr0zv381u"/>`,
		"fallback": "mingcute:anticlockwise-line",
	});
}

export default Component;
