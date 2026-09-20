import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cxbakg5mu.css';
import '../../css/x/x69whvb-k.css';
import '../../css/r/r78xt_b4d.css';
import '../../css/i/i3pkgebvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cxbakg5mu"/><path class="x69whvb-k"/><path class="r78xt_b4d"/><path class="i3pkgebvb"/></g>`,
		"fallback": "solar:airbuds-case-open-bold",
	});
}

export default Component;
