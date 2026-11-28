import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpe1u1b8u.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpe1u1b8u"/>`,
		"fallback": "pullo:border-right-bold",
	});
}

export default Component;
