import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gjrgk_ass.css';
import '../../css/s/sffdg-tdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gjrgk_ass secondary"/><path class="primary sffdg-tdo"/></g>`,
		"fallback": "iconaut:broom-duotone",
	});
}

export default Component;
