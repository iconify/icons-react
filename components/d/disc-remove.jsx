import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tdf1si01h.css';
import '../../css/j/j9uy3eb7u.css';
import '../../css/f/fznq11bvs.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="tdf1si01h"/><path class="j9uy3eb7u"/><path class="fznq11bvs"/></g>`,
		"fallback": "si-glyph:disc-remove",
	});
}

export default Component;
