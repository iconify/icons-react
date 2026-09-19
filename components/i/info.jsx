import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vo03lkbbh.css';
import '../../css/j/jbw52u0nv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(4)" class="n1lsf0bnc"><ellipse class="vo03lkbbh"/><path class="jbw52u0nv"/></g>`,
		"fallback": "si-glyph:info",
	});
}

export default Component;
