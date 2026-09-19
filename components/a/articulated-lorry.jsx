import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m4y99l5yb.css';
import '../../css/l/lgalvchew.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m4y99l5yb"/><path class="lgalvchew"/></g>`,
		"fallback": "fluent-emoji-high-contrast:articulated-lorry",
	});
}

export default Component;
