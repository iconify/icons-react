import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1-j_2mkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e1-j_2mkx"/>`,
		"fallback": "mingcute:book-dashed-fill",
	});
}

export default Component;
