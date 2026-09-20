import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgtg07bfi.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgtg07bfi"/>`,
		"fallback": "oi:inbox",
	});
}

export default Component;
