import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vznxox5jo.css';
import '../../css/f/fx1_vf-ek.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vznxox5jo"/><path class="fx1_vf-ek"/></g>`,
		"fallback": "fluent-emoji-high-contrast:game-die",
	});
}

export default Component;
