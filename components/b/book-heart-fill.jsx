import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ga4y_tbqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ga4y_tbqr"/>`,
		"fallback": "mingcute:book-heart-fill",
	});
}

export default Component;
