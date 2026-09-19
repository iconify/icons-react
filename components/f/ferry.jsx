import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qu02hzsxt.css';
import '../../css/z/zq2isibxa.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qu02hzsxt"/><path class="zq2isibxa"/></g>`,
		"fallback": "fluent-emoji-high-contrast:ferry",
	});
}

export default Component;
