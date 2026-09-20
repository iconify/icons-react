import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a8faweb_t.css';
import '../../css/w/w_8fmvbbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a8faweb_t"/><path clip-rule="evenodd" class="w_8fmvbbm"/></g>`,
		"fallback": "solar:folder-up-outline",
	});
}

export default Component;
