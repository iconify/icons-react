import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p5-wtnbnj.css';
import '../../css/p/pqh2fxvzt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="p5-wtnbnj"/><path class="pqh2fxvzt"/></g>`,
		"fallback": "codicon:git-stash-pop",
	});
}

export default Component;
