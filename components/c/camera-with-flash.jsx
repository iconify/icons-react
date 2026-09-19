import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nf5ggjbhz.css';
import '../../css/r/rngcxkb7w.css';
import '../../css/o/oirt199-w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nf5ggjbhz"/><path class="rngcxkb7w"/><path class="oirt199-w"/></g>`,
		"fallback": "fluent-emoji-high-contrast:camera-with-flash",
	});
}

export default Component;
