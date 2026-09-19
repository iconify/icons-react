import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jawofwbfd.css';
import '../../css/c/cukfk1a9z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jawofwbfd"/><path class="cukfk1a9z"/></g>`,
		"fallback": "fluent-emoji-high-contrast:face-with-monocle",
	});
}

export default Component;
