import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynvcx2b1i.css';

const viewBox = {"width":1549,"height":1881};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ynvcx2b1i"/>`,
		"fallback": "thesvg:avanza",
	});
}

export default Component;
