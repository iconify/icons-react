import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fodq4_j6j.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fodq4_j6j"/>`,
		"fallback": "fa-brands:ebay",
	});
}

export default Component;
