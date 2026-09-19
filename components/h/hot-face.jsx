import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fyxn4ccew.css';
import '../../css/d/di9ltg2bw.css';
import '../../css/s/saxggjx6e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fyxn4ccew"/><path class="di9ltg2bw"/><path class="saxggjx6e"/></g>`,
		"fallback": "fluent-emoji-high-contrast:hot-face",
	});
}

export default Component;
