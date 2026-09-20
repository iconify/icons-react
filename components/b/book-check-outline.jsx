import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cp2--zv-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cp2--zv-v"/>`,
		"fallback": "mdi:book-check-outline",
	});
}

export default Component;
