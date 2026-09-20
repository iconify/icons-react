import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1cp0nbej.css';
import '../../css/e/em0p01pxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1cp0nbej"/><path class="em0p01pxw"/>`,
		"fallback": "streamline-freehand:discount-percent-increase-arrow",
	});
}

export default Component;
