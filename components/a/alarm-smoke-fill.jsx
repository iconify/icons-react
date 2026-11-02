import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cap6s5brd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cap6s5brd"/>`,
		"fallback": "mingcute:alarm-smoke-fill",
	});
}

export default Component;
