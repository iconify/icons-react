import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fi1yetb4b.css';
import '../../css/k/kuibckblt.css';
import '../../css/z/z4vmzfb6d.css';
import '../../css/j/jiw1pkbmf.css';
import '../../css/q/qfb0low_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fi1yetb4b"/><path class="kuibckblt"/><path class="z4vmzfb6d"/><path class="jiw1pkbmf"/><path class="qfb0low_q"/></g>`,
		"fallback": "solar:cassette-linear",
	});
}

export default Component;
