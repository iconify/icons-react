import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ap01s_kfj.css';
import '../../css/j/j08cqf7lb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ap01s_kfj"/><path class="j08cqf7lb"/></g>`,
		"fallback": "fluent-emoji-high-contrast:dragon",
	});
}

export default Component;
