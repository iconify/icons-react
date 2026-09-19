import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h2-nanbnx.css';
import '../../css/m/m5w-jw68o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="h2-nanbnx"/><path class="m5w-jw68o"/></g>`,
		"fallback": "glyphs:cross-christian-bold",
	});
}

export default Component;
