import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq-76r4lu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq-76r4lu"/>`,
		"fallback": "mingcute:book-key-fill",
	});
}

export default Component;
