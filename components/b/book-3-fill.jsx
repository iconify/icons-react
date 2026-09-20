import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uu06u1-hx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uu06u1-hx"/>`,
		"fallback": "mingcute:book-3-fill",
	});
}

export default Component;
