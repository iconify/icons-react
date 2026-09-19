import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ywpk43bnk.css';
import '../../css/c/cecep-m5k.css';
import '../../css/m/mb4qco5la.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ywpk43bnk"/><path class="cecep-m5k"/><path class="mb4qco5la"/></g>`,
		"fallback": "fluent-emoji-high-contrast:full-moon",
	});
}

export default Component;
