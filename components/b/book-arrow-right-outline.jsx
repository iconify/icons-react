import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gebj2bpbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gebj2bpbz"/>`,
		"fallback": "mdi:book-arrow-right-outline",
	});
}

export default Component;
