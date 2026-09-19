import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj0bk4b3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wj0bk4b3m"/>`,
		"fallback": "bx:bx-font-family",
	});
}

export default Component;
