import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p0anpxbww.css';
import '../../css/u/u9gx6z3th.css';
import '../../css/m/m-_pys7sn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p0anpxbww"/><path class="u9gx6z3th"/><path clip-rule="evenodd" class="m-_pys7sn"/></g>`,
		"fallback": "solar:file-question-mark-outline",
	});
}

export default Component;
