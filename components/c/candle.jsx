import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/glfiebcmm.css';
import '../../css/i/ik4v81bmz.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="glfiebcmm"/><path class="ik4v81bmz"/></g>`,
		"fallback": "si-glyph:candle",
	});
}

export default Component;
