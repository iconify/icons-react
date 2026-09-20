import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbucz-2oi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbucz-2oi"/>`,
		"fallback": "mdi:book-plus-multiple-outline",
	});
}

export default Component;
