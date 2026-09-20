import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nya56cc1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nya56cc1g"/>`,
		"fallback": "streamline-ultimate:currency-sign-won-coupon-bold",
	});
}

export default Component;
