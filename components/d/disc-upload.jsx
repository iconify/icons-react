import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yyujz5s4d.css';
import '../../css/i/i3u747t-o.css';
import '../../css/h/h_1lnosyr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="yyujz5s4d"/><path class="i3u747t-o"/><path class="h_1lnosyr"/></g>`,
		"fallback": "si-glyph:disc-upload",
	});
}

export default Component;
