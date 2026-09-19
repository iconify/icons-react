import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y-kbxb-1x.css';
import '../../css/g/g0gb6q61u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="y-kbxb-1x"/><path class="g0gb6q61u"/></g>`,
		"fallback": "glyphs:badge-bold",
	});
}

export default Component;
