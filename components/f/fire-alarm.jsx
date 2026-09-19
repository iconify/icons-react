import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r2-bl-j_m.css';
import '../../css/k/k0bkxgbzs.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="r2-bl-j_m"/><path class="k0bkxgbzs"/></g>`,
		"fallback": "si-glyph:fire-alarm",
	});
}

export default Component;
