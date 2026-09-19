import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/po0mzybme.css';
import '../../css/e/exw9tltic.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="po0mzybme"/><path class="exw9tltic"/></g>`,
		"fallback": "si-glyph:curtain",
	});
}

export default Component;
