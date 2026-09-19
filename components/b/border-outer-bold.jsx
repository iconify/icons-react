import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/exzkkgm9a.css';
import '../../css/o/oyhg-yv8z.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="exzkkgm9a"/><path class="oyhg-yv8z"/></g>`,
		"fallback": "glyphs:border-outer-bold",
	});
}

export default Component;
