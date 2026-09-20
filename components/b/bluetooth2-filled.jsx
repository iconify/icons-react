import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zx0xq_boc.css';
import '../../css/h/hdy8-ib1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zx0xq_boc"/><path class="hdy8-ib1n"/></g>`,
		"fallback": "reicon:bluetooth2-filled",
	});
}

export default Component;
