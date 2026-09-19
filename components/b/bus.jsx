import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k7yqrfboi.css';
import '../../css/i/irnj_wb1f.css';
import '../../css/s/szm8_hbfe.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(1 3)" class="n1lsf0bnc"><ellipse class="k7yqrfboi"/><circle class="irnj_wb1f"/><path class="szm8_hbfe"/></g>`,
		"fallback": "si-glyph:bus",
	});
}

export default Component;
