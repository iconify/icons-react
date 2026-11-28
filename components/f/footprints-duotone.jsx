import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kvxcbebti.css';
import '../../css/k/kw-4jpb9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kvxcbebti secondary"/><path class="kw-4jpb9u primary"/></g>`,
		"fallback": "iconaut:footprints-duotone",
	});
}

export default Component;
