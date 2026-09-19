import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i0or3xbtg.css';
import '../../css/t/tl-llyxxg.css';
import '../../css/g/gllij1bxp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i0or3xbtg"/><path class="tl-llyxxg"/><path class="gllij1bxp"/></g>`,
		"fallback": "fluent-emoji-high-contrast:houses",
	});
}

export default Component;
