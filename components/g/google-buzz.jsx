import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjeo1t3ie.css';

const viewBox = {"width":464,"height":464};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjeo1t3ie"/>`,
		"fallback": "ps:google-buzz",
	});
}

export default Component;
