import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yno5f5g3y.css';
import '../../css/c/c9p4xg47x.css';
import '../../css/r/ru_jirnpc.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="yno5f5g3y"/><g transform="translate(4 1)"><ellipse class="c9p4xg47x"/><path class="ru_jirnpc"/></g></g>`,
		"fallback": "si-glyph:elevator-down",
	});
}

export default Component;
