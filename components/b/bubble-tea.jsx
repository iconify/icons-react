import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/whdk76aqr.css';
import '../../css/a/a0dc5fbdk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="whdk76aqr"/><path class="a0dc5fbdk"/></g>`,
		"fallback": "fluent-emoji-high-contrast:bubble-tea",
	});
}

export default Component;
