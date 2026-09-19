import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/ed79v0bnq.css';
import '../../css/o/otkj6bm5u.css';
import '../../css/r/r5o5b2bfd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(0 1)" class="n1lsf0bnc"><ellipse class="ed79v0bnq"/><path class="otkj6bm5u"/><path class="r5o5b2bfd"/></g>`,
		"fallback": "si-glyph:airplane-2",
	});
}

export default Component;
