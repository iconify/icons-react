import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edogw145l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edogw145l"/>`,
		"fallback": "mingcute:birthday-2-fill",
	});
}

export default Component;
