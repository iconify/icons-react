import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jerx1q9ma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jerx1q9ma"/>`,
		"fallback": "solar:explicit-bold",
	});
}

export default Component;
