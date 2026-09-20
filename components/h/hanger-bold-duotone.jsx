import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/siohcz4we.css';
import '../../css/g/gg9l7oy1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="siohcz4we"/><path class="gg9l7oy1a"/></g>`,
		"fallback": "solar:hanger-bold-duotone",
	});
}

export default Component;
