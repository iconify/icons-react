import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n87g3vegy.css';
import '../../css/p/pc4l4cwbu.css';
import '../../css/p/p1i5yb1dj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="n87g3vegy"/><path clip-rule="evenodd" class="pc4l4cwbu"/><path class="p1i5yb1dj"/></g>`,
		"fallback": "healthicons:happy2x-outline",
	});
}

export default Component;
