import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb8tj6b7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qb8tj6b7r"/>`,
		"fallback": "mingcute:blockquote-fill",
	});
}

export default Component;
