import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1qx-j91i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1qx-j91i"/>`,
		"fallback": "mingcute:comment-2-line",
	});
}

export default Component;
