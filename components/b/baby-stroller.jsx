import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/ucpauccnv.css';
import '../../css/q/q00ctabhl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ucpauccnv"/><path class="q00ctabhl"/></g>`,
		"fallback": "si-glyph:baby-stroller",
	});
}

export default Component;
