import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x8vd5ub4f.css';
import '../../css/n/n-e1pibpq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x8vd5ub4f"/><path class="n-e1pibpq"/></g>`,
		"fallback": "fluent-emoji-high-contrast:backpack",
	});
}

export default Component;
