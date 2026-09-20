import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jct4a2bzg.css';
import '../../css/k/kvdjm4bsr.css';
import '../../css/l/lb-mybcgs.css';
import '../../css/g/gzaisz9xh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jct4a2bzg"/><path class="kvdjm4bsr"/><path class="lb-mybcgs"/><path class="gzaisz9xh"/></g>`,
		"fallback": "solar:case-round-linear",
	});
}

export default Component;
