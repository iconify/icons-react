import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l9r6dgdjx.css';
import '../../css/y/yr-vdcbzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l9r6dgdjx secondary"/><path class="primary yr-vdcbzr"/></g>`,
		"fallback": "iconaut:airplay-duotone",
	});
}

export default Component;
