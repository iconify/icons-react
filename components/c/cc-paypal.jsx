import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vn32y0v_b.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vn32y0v_b"/>`,
		"fallback": "fa7-brands:cc-paypal",
	});
}

export default Component;
