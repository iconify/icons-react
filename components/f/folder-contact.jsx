import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c5rcp__tk.css';
import '../../css/h/h4dqlh8xc.css';
import '../../css/r/rg0hc6b4r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="c5rcp__tk"/><path class="h4dqlh8xc"/><path class="rg0hc6b4r"/></g>`,
		"fallback": "si-glyph:folder-contact",
	});
}

export default Component;
