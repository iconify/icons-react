import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v_qg2hb2n.css';
import '../../css/b/bc7dpdcnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v_qg2hb2n"/><path class="bc7dpdcnt"/></g>`,
		"fallback": "coolicons:git-pull-request-closed-bulk-round",
	});
}

export default Component;
