import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nla0t_bxs.css';
import '../../css/o/orre-ybmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nla0t_bxs"/><path class="orre-ybmj"/></g>`,
		"fallback": "coolicons:cylinder-bulk-round",
	});
}

export default Component;
