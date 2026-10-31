import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gd36r_bqy.css';
import '../../css/o/o4g0hhb1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gd36r_bqy"/><path class="o4g0hhb1r"/></g>`,
		"fallback": "coolicons:armchair-bulk-round",
	});
}

export default Component;
