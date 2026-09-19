import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iimqznbbx.css';
import '../../css/l/lp32v8knl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iimqznbbx"/><path clip-rule="evenodd" class="lp32v8knl"/></g>`,
		"fallback": "glyphs:bandage-1-bold",
	});
}

export default Component;
