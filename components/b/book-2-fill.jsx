import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q13w98l5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q13w98l5r"/>`,
		"fallback": "mingcute:book-2-fill",
	});
}

export default Component;
