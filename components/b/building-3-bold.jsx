import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsx8atb8o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rsx8atb8o"/>`,
		"fallback": "glyphs:building-3-bold",
	});
}

export default Component;
