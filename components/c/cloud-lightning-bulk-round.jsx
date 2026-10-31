import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u0k3xpq5f.css';
import '../../css/r/rc1di5bac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u0k3xpq5f"/><path class="rc1di5bac"/></g>`,
		"fallback": "coolicons:cloud-lightning-bulk-round",
	});
}

export default Component;
