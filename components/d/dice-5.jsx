import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bvms57e5e.css';
import '../../css/a/a2_lnlb_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bvms57e5e"/><path clip-rule="evenodd" class="a2_lnlb_l"/></g>`,
		"fallback": "gg:dice-5",
	});
}

export default Component;
