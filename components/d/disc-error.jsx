import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nqrnje_3q.css';
import '../../css/q/q-xh5rbej.css';
import '../../css/y/y457fbf-u.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="nqrnje_3q"/><path class="q-xh5rbej"/><path class="y457fbf-u"/></g>`,
		"fallback": "si-glyph:disc-error",
	});
}

export default Component;
