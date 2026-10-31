import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/na35t4bqt.css';
import '../../css/q/qwpq6qfmb.css';
import '../../css/f/f5ni3zbpu.css';
import '../../css/m/mo5zyfb2z.css';
import '../../css/c/ch3nc4bcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="na35t4bqt wm-shadow"/><path class="qwpq6qfmb wm-shadow"/><path class="f5ni3zbpu"/><path class="mo5zyfb2z"/><path class="ch3nc4bcc"/></g>`,
		"fallback": "withicons-brutal:chart-pie",
	});
}

export default Component;
