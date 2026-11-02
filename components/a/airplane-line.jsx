import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbs6kdlzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbs6kdlzu"/>`,
		"fallback": "mingcute:airplane-line",
	});
}

export default Component;
