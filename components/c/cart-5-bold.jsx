import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b918qp0xg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b918qp0xg"/>`,
		"fallback": "solar:cart-5-bold",
	});
}

export default Component;
