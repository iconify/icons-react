import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zz_o6ui4u.css';
import '../../css/c/cudvaqdpu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="zz_o6ui4u"/><path class="cudvaqdpu"/></g>`,
		"fallback": "si-glyph:heart-delete",
	});
}

export default Component;
