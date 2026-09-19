import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/edat04vhg.css';
import '../../css/x/x5wy8_b9z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="edat04vhg"/><path class="x5wy8_b9z"/></g>`,
		"fallback": "fluent-emoji-high-contrast:grinning-cat-with-smiling-eyes",
	});
}

export default Component;
