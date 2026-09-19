import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f0gyclt_c.css';
import '../../css/g/g7tgevb0d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f0gyclt_c"/><path clip-rule="evenodd" class="g7tgevb0d"/></g>`,
		"fallback": "fluent-emoji-high-contrast:chart-decreasing",
	});
}

export default Component;
