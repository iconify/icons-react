import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yzfzmqdlb.css';
import '../../css/j/jcc33pddw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yzfzmqdlb"/><path clip-rule="evenodd" class="jcc33pddw"/></g>`,
		"fallback": "reicon:cup-star-filled",
	});
}

export default Component;
