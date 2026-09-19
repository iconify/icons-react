import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a2gz-vbrk.css';
import '../../css/u/usj51mb5t.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="a2gz-vbrk"/><path class="usj51mb5t"/></g>`,
		"fallback": "si-glyph:file-download",
	});
}

export default Component;
