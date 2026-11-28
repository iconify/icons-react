import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtef4-b0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtef4-b0l"/>`,
		"fallback": "noviair-light:cart-heart",
	});
}

export default Component;
