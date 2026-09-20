import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmc-m5b-s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wmc-m5b-s"/>`,
		"fallback": "streamline:discount-percent-coupon-remix",
	});
}

export default Component;
