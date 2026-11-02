import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7w878t9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7w878t9q"/>`,
		"fallback": "mingcute:book-plus-line",
	});
}

export default Component;
