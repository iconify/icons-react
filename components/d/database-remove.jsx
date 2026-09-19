import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r0nqibciy.css';
import '../../css/x/xqnso42uj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="r0nqibciy"/><path class="xqnso42uj"/></g>`,
		"fallback": "si-glyph:database-remove",
	});
}

export default Component;
