import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qr00l4-2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qr00l4-2i"/>`,
		"fallback": "bx:category-alt",
	});
}

export default Component;
