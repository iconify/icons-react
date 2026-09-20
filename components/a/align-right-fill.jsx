import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyp338bxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fyp338bxk"/>`,
		"fallback": "mingcute:align-right-fill",
	});
}

export default Component;
