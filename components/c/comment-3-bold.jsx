import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rtgcrxbyc.css';
import '../../css/j/jrwshktnb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rtgcrxbyc"/><path class="jrwshktnb"/></g>`,
		"fallback": "glyphs:comment-3-bold",
	});
}

export default Component;
