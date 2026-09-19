import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eyamk_boj.css';
import '../../css/h/hq22nxb0x.css';
import '../../css/h/hxccg9byr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eyamk_boj"/><path clip-rule="evenodd" class="hq22nxb0x"/><path clip-rule="evenodd" class="hxccg9byr"/></g>`,
		"fallback": "pepicons:house-print",
	});
}

export default Component;
