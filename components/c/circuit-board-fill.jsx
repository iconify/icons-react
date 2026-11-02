import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dggbul2sw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dggbul2sw"/>`,
		"fallback": "mingcute:circuit-board-fill",
	});
}

export default Component;
