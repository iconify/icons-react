import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xojshwbrs.css';
import '../../css/i/ii4dcl9yv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="xojshwbrs"/><path class="ii4dcl9yv"/></g>`,
		"fallback": "si-glyph:book-open",
	});
}

export default Component;
