import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bhwytackh.css';
import '../../css/e/esduzobxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bhwytackh"/><path clip-rule="evenodd" class="esduzobxg"/></g>`,
		"fallback": "reicon:arrow-down-square",
	});
}

export default Component;
