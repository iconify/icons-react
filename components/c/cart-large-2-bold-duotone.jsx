import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lphr8070y.css';
import '../../css/p/p-86ddbul.css';
import '../../css/x/xnvx4ncsb.css';
import '../../css/w/wf4hdghvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lphr8070y"/><path class="p-86ddbul"/><path class="xnvx4ncsb"/><path class="wf4hdghvc"/></g>`,
		"fallback": "solar:cart-large-2-bold-duotone",
	});
}

export default Component;
