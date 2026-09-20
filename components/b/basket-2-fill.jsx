import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9hd6vbbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q9hd6vbbk"/>`,
		"fallback": "mingcute:basket-2-fill",
	});
}

export default Component;
