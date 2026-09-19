import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mzlwqybln.css';
import '../../css/l/ls6dwkbdz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mzlwqybln"/><path class="ls6dwkbdz"/></g>`,
		"fallback": "fluent-emoji-high-contrast:face-with-hand-over-mouth",
	});
}

export default Component;
