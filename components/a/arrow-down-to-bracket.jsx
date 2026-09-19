import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rp3tu2nwo.css';
import '../../css/e/end5akbqu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rp3tu2nwo"/><path class="end5akbqu"/></g>`,
		"fallback": "at-icons:arrow-down-to-bracket",
	});
}

export default Component;
