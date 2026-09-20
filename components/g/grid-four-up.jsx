import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqvr593jz.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqvr593jz"/>`,
		"fallback": "oi:grid-four-up",
	});
}

export default Component;
