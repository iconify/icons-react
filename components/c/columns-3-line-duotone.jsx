import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dcxilvb-z.css';
import '../../css/r/rq-mg_bte.css';
import '../../css/l/lt87iveio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dcxilvb-z"/><path class="rq-mg_bte"/><path class="lt87iveio"/></g>`,
		"fallback": "solar:columns-3-line-duotone",
	});
}

export default Component;
