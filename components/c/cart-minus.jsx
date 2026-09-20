import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd71a5b1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pd71a5b1i"/>`,
		"fallback": "mynaui:cart-minus",
	});
}

export default Component;
