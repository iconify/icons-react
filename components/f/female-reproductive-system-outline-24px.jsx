import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bsor50bev.css';
import '../../css/i/i95e2bazg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bsor50bev"/><path class="i95e2bazg"/></g>`,
		"fallback": "healthicons:female-reproductive-system-outline-24px",
	});
}

export default Component;
