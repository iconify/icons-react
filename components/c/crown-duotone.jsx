import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jw4s2xeeg.css';
import '../../css/x/xdl3y1qad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jw4s2xeeg secondary"/><path class="primary xdl3y1qad"/></g>`,
		"fallback": "iconaut:crown-duotone",
	});
}

export default Component;
