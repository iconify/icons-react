import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kk-1welfr.css';
import '../../css/c/cv5-yf-2z.css';
import '../../css/r/rp0yixu2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kk-1welfr"/><path class="cv5-yf-2z"/><path class="rp0yixu2p"/></g>`,
		"fallback": "andrsrxn:hotdog",
	});
}

export default Component;
