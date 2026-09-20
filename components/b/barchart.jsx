import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wifg_yb4u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wifg_yb4u"/>`,
		"fallback": "raphael:barchart",
	});
}

export default Component;
