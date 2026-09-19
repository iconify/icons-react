import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzp-m6bsp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzp-m6bsp"/>`,
		"fallback": "ion:android-playstore",
	});
}

export default Component;
