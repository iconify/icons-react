import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/da1w8zewh.css';
import '../../css/p/pm-3j_yfg.css';
import '../../css/y/yer1a2olk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="da1w8zewh"/><path clip-rule="evenodd" class="pm-3j_yfg"/><path class="yer1a2olk"/></g>`,
		"fallback": "healthicons:blood-rh-p-outline-24px",
	});
}

export default Component;
