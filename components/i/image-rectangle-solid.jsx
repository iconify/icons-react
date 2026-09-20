import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w8-scds3f.css';
import '../../css/o/oes50aclg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w8-scds3f"/><path class="oes50aclg"/></g>`,
		"fallback": "mynaui:image-rectangle-solid",
	});
}

export default Component;
