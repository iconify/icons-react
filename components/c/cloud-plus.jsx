import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zcqjgnwcs.css';
import '../../css/k/k2inzjjad.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="zcqjgnwcs"/><path class="k2inzjjad"/></g>`,
		"fallback": "si-glyph:cloud-plus",
	});
}

export default Component;
