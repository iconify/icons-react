import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmijl1q0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmijl1q0c"/>`,
		"fallback": "eva:arrow-ios-downward-outline",
	});
}

export default Component;
