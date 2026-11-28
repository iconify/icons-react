import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohs4-bkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rohs4-bkb"/>`,
		"fallback": "noviair-light:book-heart",
	});
}

export default Component;
