import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gzjgc_t0q.css';
import '../../css/s/sj2fji-2e.css';
import '../../css/r/rw8hl94tg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gzjgc_t0q"/><path class="sj2fji-2e"/><path class="rw8hl94tg"/></g>`,
		"fallback": "solar:book-minimalistic-linear",
	});
}

export default Component;
