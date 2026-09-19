import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bfqe9pj_b.css';
import '../../css/t/tzzqslbqw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="bfqe9pj_b"/><path class="tzzqslbqw"/></g>`,
		"fallback": "si-glyph:document-bullet-list",
	});
}

export default Component;
