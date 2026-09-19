import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g0moj261j.css';
import '../../css/e/elnju8bvz.css';
import '../../css/a/agazg70dp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g0moj261j"/><path class="elnju8bvz"/><path class="agazg70dp"/></g>`,
		"fallback": "fluent-emoji-high-contrast:beating-heart",
	});
}

export default Component;
