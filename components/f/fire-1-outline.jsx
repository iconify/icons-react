import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvvvaq5nz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dvvvaq5nz"/>`,
		"fallback": "glyphs:fire-1-outline",
	});
}

export default Component;
