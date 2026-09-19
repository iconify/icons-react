import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rjidodrpm.css';
import '../../css/y/ytj3kb0_g.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="rjidodrpm"/><path class="ytj3kb0_g"/></g>`,
		"fallback": "si-glyph:battery-half",
	});
}

export default Component;
