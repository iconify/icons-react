import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3rz52jnr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w3rz52jnr"/>`,
		"fallback": "glyphs:basket-bold",
	});
}

export default Component;
