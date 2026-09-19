import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fameyv2xk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fameyv2xk"/>`,
		"fallback": "heroicons:bars-arrow-down",
	});
}

export default Component;
