import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b2onxacdt.css';
import '../../css/e/ez9076b0z.css';
import '../../css/g/gkclh6b0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="b2onxacdt"/><path class="ez9076b0z"/><path clip-rule="evenodd" class="gkclh6b0w"/></g>`,
		"fallback": "solar:folder-tree-outline",
	});
}

export default Component;
