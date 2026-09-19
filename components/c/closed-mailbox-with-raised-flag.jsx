import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e2dlhsbrz.css';
import '../../css/j/j0gbdabmp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e2dlhsbrz"/><path class="j0gbdabmp"/></g>`,
		"fallback": "fluent-emoji-high-contrast:closed-mailbox-with-raised-flag",
	});
}

export default Component;
