import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c2-ezubni.css';
import '../../css/d/dc7vceb_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c2-ezubni"/><path class="dc7vceb_q"/></g>`,
		"fallback": "coolicons:desktop-tower-bulk-round",
	});
}

export default Component;
