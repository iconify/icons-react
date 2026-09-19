import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xw0_rhs8q.css';

const viewBox = {"width":2304,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xw0_rhs8q"/>`,
		"fallback": "fa:cc-paypal",
	});
}

export default Component;
