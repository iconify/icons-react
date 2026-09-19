import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qpa68_bth.css';
import '../../css/h/ho4ruxpoy.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="qpa68_bth"/><path class="ho4ruxpoy"/></g>`,
		"fallback": "si-glyph:button-arrow-up",
	});
}

export default Component;
