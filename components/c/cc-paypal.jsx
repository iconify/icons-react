import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9ml06bhr.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9ml06bhr"/>`,
		"fallback": "fa-brands:cc-paypal",
	});
}

export default Component;
