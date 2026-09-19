import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vd9wuab_t.css';
import '../../css/e/e2-g-llno.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="vd9wuab_t"/><path class="e2-g-llno"/></g>`,
		"fallback": "si-glyph:customer-support",
	});
}

export default Component;
