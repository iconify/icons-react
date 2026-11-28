import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xdi59xbir.css';
import '../../css/a/a3b7cq_fh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary xdi59xbir"/><path class="a3b7cq_fh primary"/></g>`,
		"fallback": "iconaut:id-badge-duotone",
	});
}

export default Component;
