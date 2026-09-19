import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fugj-bc1n.css';
import '../../css/e/ek_vi_w9n.css';
import '../../css/u/ussqgxbky.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="fugj-bc1n"/><path class="ek_vi_w9n"/><path class="ussqgxbky"/></g>`,
		"fallback": "si-glyph:document-arrow-right",
	});
}

export default Component;
