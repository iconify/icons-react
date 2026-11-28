import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uo9jbeb6e.css';
import '../../css/w/wprloiw_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uo9jbeb6e"/><path class="wprloiw_k"/></g>`,
		"fallback": "iconaut:gallery-vertical-solid",
	});
}

export default Component;
