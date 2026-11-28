import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6s8su6gi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6s8su6gi"/>`,
		"fallback": "noviair-light:badge-percent-check",
	});
}

export default Component;
