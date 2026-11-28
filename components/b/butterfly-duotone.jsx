import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p3l72nrue.css';
import '../../css/o/o70s7-sgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p3l72nrue secondary"/><path class="o70s7-sgf primary"/></g>`,
		"fallback": "iconaut:butterfly-duotone",
	});
}

export default Component;
