import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9_s-nbfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9_s-nbfj"/>`,
		"fallback": "bx:bxl-paypal",
	});
}

export default Component;
