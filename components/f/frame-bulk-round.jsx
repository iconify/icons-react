import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cr4z7vbxc.css';
import '../../css/g/g-oss6b3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cr4z7vbxc"/><path class="g-oss6b3q"/></g>`,
		"fallback": "coolicons:frame-bulk-round",
	});
}

export default Component;
