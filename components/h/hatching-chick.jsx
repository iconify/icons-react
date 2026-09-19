import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yk0692bqk.css';
import '../../css/g/gep76pbmx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yk0692bqk"/><path class="gep76pbmx"/></g>`,
		"fallback": "fluent-emoji-high-contrast:hatching-chick",
	});
}

export default Component;
