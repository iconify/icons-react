import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jrn30jb0v.css';
import '../../css/d/dg3unj11g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jrn30jb0v"/><path class="dg3unj11g"/></g>`,
		"fallback": "glyphs:crown-3-bold",
	});
}

export default Component;
