import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rc6h862-n.css';
import '../../css/n/nxtilv_rg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rc6h862-n secondary"/><path class="nxtilv_rg primary"/></g>`,
		"fallback": "iconaut:chess-bishop-duotone",
	});
}

export default Component;
