import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a6b8w9bpo.css';
import '../../css/g/gt71-xrst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a6b8w9bpo"/><path class="gt71-xrst"/></g>`,
		"fallback": "coolicons:house-alt-2-bulk-round",
	});
}

export default Component;
