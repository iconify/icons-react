import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xm8h3ub8g.css';
import '../../css/n/ntvg8ebwg.css';
import '../../css/s/s16hu4bqq.css';
import '../../css/f/f3zftobmw.css';
import '../../css/e/ejcm2pblc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xm8h3ub8g"/><path class="ntvg8ebwg"/><path class="s16hu4bqq"/><path class="f3zftobmw"/><path class="ejcm2pblc"/></g>`,
		"fallback": "solar:chevrons-left-right-ellipsis-bold",
	});
}

export default Component;
