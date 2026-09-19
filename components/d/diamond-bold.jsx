import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t68lgib2v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t68lgib2v"/>`,
		"fallback": "glyphs:diamond-bold",
	});
}

export default Component;
