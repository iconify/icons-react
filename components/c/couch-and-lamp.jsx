import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f_c882bfi.css';
import '../../css/r/r29zqnbcf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f_c882bfi"/><path class="r29zqnbcf"/></g>`,
		"fallback": "fluent-emoji-high-contrast:couch-and-lamp",
	});
}

export default Component;
