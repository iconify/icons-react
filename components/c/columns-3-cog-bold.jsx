import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/ql-qkkber.css';
import '../../css/o/ogh3x1btd.css';
import '../../css/r/rt2zemb8t.css';
import '../../css/k/kbty90b-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ql-qkkber"/><path clip-rule="evenodd" class="ogh3x1btd"/><path class="rt2zemb8t"/><path class="kbty90b-x"/></g>`,
		"fallback": "solar:columns-3-cog-bold",
	});
}

export default Component;
