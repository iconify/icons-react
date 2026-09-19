import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u2bqgxb8p.css';
import '../../css/f/fvkz_ckxw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u2bqgxb8p"/><path class="fvkz_ckxw"/></g>`,
		"fallback": "fluent-emoji-high-contrast:beach-with-umbrella",
	});
}

export default Component;
