import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzp7s2bho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzp7s2bho"/>`,
		"fallback": "mingcute:drawing-board-line",
	});
}

export default Component;
