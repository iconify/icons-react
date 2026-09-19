import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qrt-pxbjg.css';
import '../../css/g/gkx4_bm2t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qrt-pxbjg"/><path class="gkx4_bm2t"/></g>`,
		"fallback": "pepicons:angle-left",
	});
}

export default Component;
