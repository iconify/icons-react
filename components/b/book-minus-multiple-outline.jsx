import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n09x0rbuf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n09x0rbuf"/>`,
		"fallback": "mdi:book-minus-multiple-outline",
	});
}

export default Component;
