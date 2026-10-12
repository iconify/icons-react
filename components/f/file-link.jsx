import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zfjc_4b_l.css';
import '../../css/r/rp79n_-hl.css';
import '../../css/w/ww8126b4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zfjc_4b_l"/><path class="rp79n_-hl"/><path class="ww8126b4z"/></g>`,
		"fallback": "andrsrxn:file-link",
	});
}

export default Component;
