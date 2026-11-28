import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/umuseobtb.css';
import '../../css/b/bplp-m3wp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary umuseobtb"/><path class="bplp-m3wp primary"/></g>`,
		"fallback": "iconaut:corner-left-down-duotone",
	});
}

export default Component;
