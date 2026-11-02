import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1r9m9brd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1r9m9brd"/>`,
		"fallback": "mingcute:box-3-line",
	});
}

export default Component;
