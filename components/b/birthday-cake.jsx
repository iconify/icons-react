import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ug2w2giyu.css';
import '../../css/a/apku97bps.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ug2w2giyu"/><path class="apku97bps"/></g>`,
		"fallback": "fluent-emoji-high-contrast:birthday-cake",
	});
}

export default Component;
