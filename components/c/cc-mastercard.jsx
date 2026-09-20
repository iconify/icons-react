import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x324subsm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x324subsm"/>`,
		"fallback": "la:cc-mastercard",
	});
}

export default Component;
