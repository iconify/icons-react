import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ab5x98fnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ab5x98fnz"/>`,
		"fallback": "mingcute:drawer-2-fill",
	});
}

export default Component;
