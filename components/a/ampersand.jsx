import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um1d8cbpz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="um1d8cbpz"/>`,
		"fallback": "glyphs-poly:ampersand",
	});
}

export default Component;
