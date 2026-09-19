import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jntkddc8p.css';
import '../../css/k/k40kk7i3e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jntkddc8p"/><path class="k40kk7i3e"/></g>`,
		"fallback": "fluent-emoji-high-contrast:horse",
	});
}

export default Component;
