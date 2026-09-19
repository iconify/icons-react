import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sadjdtq2i.css';
import '../../css/a/a2_lnlb_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sadjdtq2i"/><path clip-rule="evenodd" class="a2_lnlb_l"/></g>`,
		"fallback": "gg:dice-1",
	});
}

export default Component;
