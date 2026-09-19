import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cl08a40-e.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cl08a40-e"/>`,
		"fallback": "glyphs:heart-1-bold",
	});
}

export default Component;
