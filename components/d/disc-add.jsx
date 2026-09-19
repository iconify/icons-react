import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dk4lbjj-y.css';
import '../../css/g/gld1qdb9x.css';
import '../../css/y/y457fbf-u.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="dk4lbjj-y"/><path class="gld1qdb9x"/><path class="y457fbf-u"/></g>`,
		"fallback": "si-glyph:disc-add",
	});
}

export default Component;
