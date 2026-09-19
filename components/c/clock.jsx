import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dj8ojob5r.css';
import '../../css/c/ces2_x3wl.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="dj8ojob5r"/><path class="ces2_x3wl"/></g>`,
		"fallback": "si-glyph:clock",
	});
}

export default Component;
