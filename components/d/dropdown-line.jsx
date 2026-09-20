import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0hucxhbr.css';
import '../../css/q/q4cmd7h4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0hucxhbr"/><path class="q4cmd7h4b"/>`,
		"fallback": "mingcute:dropdown-line",
	});
}

export default Component;
