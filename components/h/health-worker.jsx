import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s8vr-hogo.css';
import '../../css/q/q9yy-pido.css';
import '../../css/t/tcrlt0b1d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s8vr-hogo"/><path class="q9yy-pido"/><path class="tcrlt0b1d"/></g>`,
		"fallback": "fluent-emoji-high-contrast:health-worker",
	});
}

export default Component;
