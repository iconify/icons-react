import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvmdom3gi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvmdom3gi"/>`,
		"fallback": "simple-icons:braintree",
	});
}

export default Component;
