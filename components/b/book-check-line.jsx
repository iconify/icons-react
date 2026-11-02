import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwj331l_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwj331l_q"/>`,
		"fallback": "mingcute:book-check-line",
	});
}

export default Component;
