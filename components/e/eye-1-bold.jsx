import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pyp7phblq.css';
import '../../css/d/dwqz_ibim.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pyp7phblq"/><path class="dwqz_ibim"/></g>`,
		"fallback": "glyphs:eye-1-bold",
	});
}

export default Component;
