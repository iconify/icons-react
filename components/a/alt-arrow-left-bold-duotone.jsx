import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uloojgbzt.css';
import '../../css/c/cnxl_jben.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uloojgbzt"/><path class="cnxl_jben"/></g>`,
		"fallback": "solar:alt-arrow-left-bold-duotone",
	});
}

export default Component;
