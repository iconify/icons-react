import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jfou2ac_g.css';
import '../../css/c/c_civ1_3w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="jfou2ac_g"/><path class="c_civ1_3w"/></g>`,
		"fallback": "si-glyph:cocktail",
	});
}

export default Component;
