import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dcxilvb-z.css';
import '../../css/o/o__f46b3u.css';
import '../../css/r/rma5_ql1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dcxilvb-z"/><path class="o__f46b3u"/><path class="rma5_ql1e"/></g>`,
		"fallback": "solar:columns-3-line-duotone",
	});
}

export default Component;
