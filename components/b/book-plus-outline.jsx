import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3g22gb3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3g22gb3t"/>`,
		"fallback": "mdi:book-plus-outline",
	});
}

export default Component;
