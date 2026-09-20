import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6jj6n2ts.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e6jj6n2ts"/>`,
		"fallback": "streamline-flex:discount-percent-coupon-remix",
	});
}

export default Component;
