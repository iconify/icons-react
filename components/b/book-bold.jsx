import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ij_vp4bfu.css';
import '../../css/i/i8qlvuc_m.css';
import '../../css/j/j7mp31bjk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ij_vp4bfu"/><path class="i8qlvuc_m"/><path class="j7mp31bjk"/></g>`,
		"fallback": "glyphs:book-bold",
	});
}

export default Component;
