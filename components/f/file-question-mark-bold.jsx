import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t-_8anuwk.css';
import '../../css/c/c73t34bfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="t-_8anuwk"/><path class="c73t34bfn"/></g>`,
		"fallback": "solar:file-question-mark-bold",
	});
}

export default Component;
