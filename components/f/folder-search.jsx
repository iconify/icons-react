import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lhqj5vb6u.css';
import '../../css/p/pfijgcd8z.css';
import '../../css/i/imeoqsh9e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="lhqj5vb6u"/><path class="pfijgcd8z"/><path class="imeoqsh9e"/></g>`,
		"fallback": "si-glyph:folder-search",
	});
}

export default Component;
