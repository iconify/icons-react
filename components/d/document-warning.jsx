import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bfqe9pj_b.css';
import '../../css/t/t2_mp8bco.css';
import '../../css/y/y4xsqtbff.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="bfqe9pj_b"/><path class="t2_mp8bco"/><path class="y4xsqtbff"/></g>`,
		"fallback": "si-glyph:document-warning",
	});
}

export default Component;
