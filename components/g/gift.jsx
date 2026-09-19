import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fa94b1h-d.css';
import '../../css/f/fgne4mbxx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="fa94b1h-d"/><path class="fgne4mbxx"/></g>`,
		"fallback": "si-glyph:gift",
	});
}

export default Component;
