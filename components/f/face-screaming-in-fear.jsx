import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rz6x_nb6z.css';
import '../../css/a/adrut5rhh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rz6x_nb6z"/><path class="adrut5rhh"/></g>`,
		"fallback": "fluent-emoji-high-contrast:face-screaming-in-fear",
	});
}

export default Component;
