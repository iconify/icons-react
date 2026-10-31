import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p4o9dbbhf.css';
import '../../css/a/adof2ob-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p4o9dbbhf"/><path class="adof2ob-m"/></g>`,
		"fallback": "coolicons:hard-drive-bulk-round",
	});
}

export default Component;
