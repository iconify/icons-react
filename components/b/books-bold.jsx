import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m8m4x6buq.css';
import '../../css/e/e1lmk9bly.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m8m4x6buq"/><path class="e1lmk9bly"/></g>`,
		"fallback": "glyphs:books-bold",
	});
}

export default Component;
