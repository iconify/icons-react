import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wbqzlj9jr.css';
import '../../css/n/nrq_3zyrs.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wbqzlj9jr"/><path class="nrq_3zyrs"/></g>`,
		"fallback": "si-glyph:dish",
	});
}

export default Component;
