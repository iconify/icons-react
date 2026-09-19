import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybuw67b2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybuw67b2b"/>`,
		"fallback": "bx:bx-qr",
	});
}

export default Component;
