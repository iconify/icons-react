import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x16m-k90k.css';
import '../../css/g/g7w1vwbmn.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="x16m-k90k"/><path class="g7w1vwbmn"/></g>`,
		"fallback": "si-glyph:button-arrow-down",
	});
}

export default Component;
