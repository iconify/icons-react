import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j_npduomz.css';
import '../../css/p/pa7eyybxj.css';
import '../../css/i/i9odujbib.css';
import '../../css/i/i0f6qcbhq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j_npduomz"/><path class="pa7eyybxj"/><path clip-rule="evenodd" class="i9odujbib"/><path class="i0f6qcbhq"/></g>`,
		"fallback": "glyphs-poly:bookmarks",
	});
}

export default Component;
