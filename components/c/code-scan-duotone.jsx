import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ia7c69o0d.css';
import '../../css/n/nq7gkdlse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ia7c69o0d"/><path class="nq7gkdlse"/></g>`,
		"fallback": "reicon:code-scan-duotone",
	});
}

export default Component;
