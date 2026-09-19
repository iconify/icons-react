import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6_iq1b1e.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6_iq1b1e"/>`,
		"fallback": "fa6-solid:cart-arrow-down",
	});
}

export default Component;
