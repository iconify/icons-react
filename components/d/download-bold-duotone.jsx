import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e7ysxrb0m.css';
import '../../css/u/uk0feobbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e7ysxrb0m"/><path clip-rule="evenodd" class="uk0feobbl"/></g>`,
		"fallback": "solar:download-bold-duotone",
	});
}

export default Component;
