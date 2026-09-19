import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i2ovbkbrh.css';
import '../../css/v/vyt0hfy-l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i2ovbkbrh"/><path class="vyt0hfy-l"/></g>`,
		"fallback": "fluent-emoji-high-contrast:bus-stop",
	});
}

export default Component;
