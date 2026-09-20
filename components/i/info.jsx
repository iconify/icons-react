import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pimlciajz.css';
import '../../css/d/da73u8bce.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pimlciajz"/><path class="da73u8bce"/>`,
		"fallback": "iwwa:info",
	});
}

export default Component;
