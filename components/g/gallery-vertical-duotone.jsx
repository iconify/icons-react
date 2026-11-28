import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r4sxlqc9f.css';
import '../../css/w/wprloiw_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r4sxlqc9f secondary"/><path class="primary wprloiw_k"/></g>`,
		"fallback": "iconaut:gallery-vertical-duotone",
	});
}

export default Component;
