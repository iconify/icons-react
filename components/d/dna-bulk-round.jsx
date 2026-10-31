import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zzhtv4blh.css';
import '../../css/r/r0mz8-loo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zzhtv4blh"/><path class="r0mz8-loo"/></g>`,
		"fallback": "coolicons:dna-bulk-round",
	});
}

export default Component;
