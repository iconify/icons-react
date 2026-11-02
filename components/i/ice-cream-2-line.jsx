import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kq0s4iban.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kq0s4iban"/>`,
		"fallback": "mingcute:ice-cream-2-line",
	});
}

export default Component;
