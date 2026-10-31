import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ck7nrfbrw.css';
import '../../css/h/hl4gx8vdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ck7nrfbrw"/><path class="hl4gx8vdx"/></g>`,
		"fallback": "coolicons:database-check-corner-bulk-round",
	});
}

export default Component;
