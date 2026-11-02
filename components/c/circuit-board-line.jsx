import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbt7j-2sg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbt7j-2sg"/>`,
		"fallback": "mingcute:circuit-board-line",
	});
}

export default Component;
