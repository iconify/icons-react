import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/oul6nl2zr.css';
import '../../css/l/ld3mufb_b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="oul6nl2zr"/><path class="ld3mufb_b"/></g>`,
		"fallback": "bi:chevron-double-right",
	});
}

export default Component;
