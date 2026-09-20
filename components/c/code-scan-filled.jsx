import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cl4yuccwl.css';
import '../../css/n/nq7gkdlse.css';
import '../../css/l/lsv0mdbrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cl4yuccwl"/><path class="nq7gkdlse"/><path class="lsv0mdbrt"/></g>`,
		"fallback": "reicon:code-scan-filled",
	});
}

export default Component;
