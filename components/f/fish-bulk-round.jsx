import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gsj76gm_m.css';
import '../../css/c/cd4o98r9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gsj76gm_m"/><path class="cd4o98r9f"/></g>`,
		"fallback": "coolicons:fish-bulk-round",
	});
}

export default Component;
