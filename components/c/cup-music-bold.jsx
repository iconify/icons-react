import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yg0--o_mk.css';
import '../../css/o/odd_1id3g.css';
import '../../css/r/rsdly3b2w.css';
import '../../css/h/hy0wlvbcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yg0--o_mk"/><path clip-rule="evenodd" class="odd_1id3g"/><path class="rsdly3b2w"/><path class="hy0wlvbcc"/></g>`,
		"fallback": "solar:cup-music-bold",
	});
}

export default Component;
