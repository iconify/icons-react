import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/ra6655bzl.css';
import '../../css/b/bk5h7stgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ra6655bzl"/><path class="bk5h7stgq"/></g>`,
		"fallback": "keyline-icons:bars-progress-duotone",
	});
}

export default Component;
