import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpy4_z3jm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpy4_z3jm"/>`,
		"fallback": "mingcute:book-3-fill",
	});
}

export default Component;
