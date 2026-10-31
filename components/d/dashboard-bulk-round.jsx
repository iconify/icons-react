import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p0d8_acbc.css';
import '../../css/x/xrvuenbxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p0d8_acbc"/><path class="xrvuenbxx"/></g>`,
		"fallback": "coolicons:dashboard-bulk-round",
	});
}

export default Component;
