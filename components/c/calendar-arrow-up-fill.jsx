import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ys-vphbny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ys-vphbny"/>`,
		"fallback": "mingcute:calendar-arrow-up-fill",
	});
}

export default Component;
