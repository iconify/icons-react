import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hnwe5ebvt.css';
import '../../css/y/ywwg3fpiw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hnwe5ebvt secondary"/><path class="primary ywwg3fpiw"/></g>`,
		"fallback": "iconaut:folder-output-duotone",
	});
}

export default Component;
