import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gfs57itka.css';
import '../../css/u/u-t2g1brr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gfs57itka"/><path class="u-t2g1brr"/></g>`,
		"fallback": "coolicons:fox-bulk-round",
	});
}

export default Component;
