import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r25b-oblt.css';
import '../../css/i/iavo5lt_u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r25b-oblt"/><path class="iavo5lt_u"/></g>`,
		"fallback": "fluent-emoji-high-contrast:bridge-at-night",
	});
}

export default Component;
