import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c--x9lbmm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c--x9lbmm"/>`,
		"fallback": "glyphs:i-bold",
	});
}

export default Component;
