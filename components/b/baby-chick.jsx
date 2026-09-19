import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r_k5z4b5j.css';
import '../../css/g/ghku-zb3b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r_k5z4b5j"/><path class="ghku-zb3b"/></g>`,
		"fallback": "fluent-emoji-high-contrast:baby-chick",
	});
}

export default Component;
