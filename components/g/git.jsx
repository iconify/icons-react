import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gsyv_2g7m.css';
import '../../css/r/rz-9b86jr.css';
import '../../css/j/j9n-wgfhi.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="gsyv_2g7m"/><g clip-path="url(#SVGg3D4Hd7H)"><path class="rz-9b86jr"/></g><defs><clipPath id="SVGg3D4Hd7H"><path class="j9n-wgfhi"/></clipPath></defs></g>`,
		"fallback": "skill-icons:git",
	});
}

export default Component;
