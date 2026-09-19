import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rrm6macbr.css';
import '../../css/e/e3r6-edvs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rrm6macbr"/><path class="e3r6-edvs"/></g>`,
		"fallback": "fluent-emoji-high-contrast:ear",
	});
}

export default Component;
