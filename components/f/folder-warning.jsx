import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pxh3phlii.css';
import '../../css/g/gnwj_4b2g.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="pxh3phlii"/><path class="gnwj_4b2g"/></g>`,
		"fallback": "si-glyph:folder-warning",
	});
}

export default Component;
