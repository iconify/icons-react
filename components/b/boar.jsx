import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kfpqlbcax.css';
import '../../css/w/w1_vvxblr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kfpqlbcax"/><path class="w1_vvxblr"/></g>`,
		"fallback": "fluent-emoji-high-contrast:boar",
	});
}

export default Component;
