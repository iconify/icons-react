import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wp1rrpeww.css';
import '../../css/d/d5m5erb7b.css';
import '../../css/r/r5amh2b-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wp1rrpeww"/><path class="d5m5erb7b"/><path class="r5amh2b-v"/></g>`,
		"fallback": "solar:code-2-bold",
	});
}

export default Component;
