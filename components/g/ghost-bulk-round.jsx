import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f154krbzo.css';
import '../../css/m/m_qqm-b_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f154krbzo"/><path class="m_qqm-b_v"/></g>`,
		"fallback": "coolicons:ghost-bulk-round",
	});
}

export default Component;
