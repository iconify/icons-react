import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfhsckbjc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wfhsckbjc"/>`,
		"fallback": "streamline-flex:discount-percent-coupon-solid",
	});
}

export default Component;
