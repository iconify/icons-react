import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j3_4id34h.css';
import '../../css/g/gd92vsrsz.css';
import '../../css/r/rq8v8obdh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j3_4id34h"/><path clip-rule="evenodd" class="gd92vsrsz"/><path class="rq8v8obdh"/></g>`,
		"fallback": "glyphs:images-bold",
	});
}

export default Component;
