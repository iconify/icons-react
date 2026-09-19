import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rs-trobto.css';
import '../../css/y/ya7syfezh.css';
import '../../css/i/i0yqupb1j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="rs-trobto"/><path class="ya7syfezh"/><path class="i0yqupb1j"/></g>`,
		"fallback": "si-glyph:disc-download",
	});
}

export default Component;
