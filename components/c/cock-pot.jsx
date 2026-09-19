import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xd3bv1-hx.css';
import '../../css/r/rb37m9b_d.css';
import '../../css/b/b4-0nz5dw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="xd3bv1-hx"/><path class="rb37m9b_d"/><path class="b4-0nz5dw"/></g>`,
		"fallback": "si-glyph:cock-pot",
	});
}

export default Component;
