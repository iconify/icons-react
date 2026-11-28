import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-k1sjv1t.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-k1sjv1t"/>`,
		"fallback": "pullo:calendar-arrow-clockwise-light",
	});
}

export default Component;
