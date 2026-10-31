import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ocmf4mbve.css';
import '../../css/p/pa84irn8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ocmf4mbve"/><path class="pa84irn8f"/></g>`,
		"fallback": "coolicons:gitlab-bulk-round",
	});
}

export default Component;
