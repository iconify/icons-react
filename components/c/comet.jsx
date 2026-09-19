import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dojp42b2k.css';
import '../../css/r/rwe6ggbzn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dojp42b2k"/><path class="rwe6ggbzn"/></g>`,
		"fallback": "fluent-emoji-high-contrast:comet",
	});
}

export default Component;
