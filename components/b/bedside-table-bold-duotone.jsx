import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qa0-fabav.css';
import '../../css/k/kljuznu8v.css';
import '../../css/k/kog7l8spy.css';
import '../../css/k/k0ke3wicp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qa0-fabav"/><path clip-rule="evenodd" class="kljuznu8v"/><path class="kog7l8spy"/><path clip-rule="evenodd" class="k0ke3wicp"/></g>`,
		"fallback": "solar:bedside-table-bold-duotone",
	});
}

export default Component;
