import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdfi2l-qu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdfi2l-qu"/>`,
		"fallback": "mingcute:currency-baht-2-fill",
	});
}

export default Component;
