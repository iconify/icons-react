import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qelwoea_p.css';
import '../../css/e/e-0bb14df.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qelwoea_p"/><path class="e-0bb14df"/></g>`,
		"fallback": "fluent-emoji-high-contrast:fuel-pump",
	});
}

export default Component;
