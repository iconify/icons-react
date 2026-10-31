import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fm0tjs-pa.css';
import '../../css/i/i-1rx4jhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fm0tjs-pa"/><path class="i-1rx4jhn"/></g>`,
		"fallback": "coolicons:coupon-duocolor-round",
	});
}

export default Component;
