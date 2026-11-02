import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unfj3cbdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unfj3cbdj"/>`,
		"fallback": "mingcute:book-4-line",
	});
}

export default Component;
