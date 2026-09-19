import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jr8o5xbwo.css';
import '../../css/m/mio0p5byd.css';
import '../../css/i/ib7c11bau.css';
import '../../css/l/lybwfjbmr.css';
import '../../css/e/e64a3tb2y.css';
import '../../css/v/vca3m3c0v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jr8o5xbwo"/><path class="mio0p5byd"/><path class="ib7c11bau"/><path class="lybwfjbmr"/><path clip-rule="evenodd" class="e64a3tb2y"/><path class="vca3m3c0v"/></g>`,
		"fallback": "glyphs-poly:head-side-mask",
	});
}

export default Component;
