import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8yf2jbol.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8yf2jbol"/>`,
		"fallback": "glyphs:bars-bold",
	});
}

export default Component;
