import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rq-5qrh1t.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rq-5qrh1t"/>`,
		"fallback": "medical-icon:i-coffee-shop",
	});
}

export default Component;
