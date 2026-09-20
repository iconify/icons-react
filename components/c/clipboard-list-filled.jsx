import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xqyt8mb_q.css';
import '../../css/u/ubrcenbwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xqyt8mb_q"/><path clip-rule="evenodd" class="ubrcenbwj"/></g>`,
		"fallback": "reicon:clipboard-list-filled",
	});
}

export default Component;
