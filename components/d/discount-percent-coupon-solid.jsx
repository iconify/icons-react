import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/geqsypb_p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="geqsypb_p"/>`,
		"fallback": "streamline:discount-percent-coupon-solid",
	});
}

export default Component;
