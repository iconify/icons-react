import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m601o8v1p.css';
import '../../css/w/w4gnlobgl.css';
import '../../css/l/lg9wdcc1b.css';
import '../../css/z/z3rwheb9e.css';
import '../../css/l/lfu8-3bxw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m601o8v1p"/><path class="w4gnlobgl"/><path class="lg9wdcc1b"/><path class="z3rwheb9e"/><path class="lfu8-3bxw"/></g>`,
		"fallback": "fluent-emoji-flat:cold-face",
	});
}

export default Component;
