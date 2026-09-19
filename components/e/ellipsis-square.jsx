import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/h/hxgyvsbny.css';
import '../../css/e/exvi9zkwm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="hxgyvsbny"/><path class="exvi9zkwm"/></g>`,
		"fallback": "glyphs:ellipsis-square",
	});
}

export default Component;
