import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xo5liybaf.css';
import '../../css/d/dp5ljuulf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xo5liybaf"/><path class="dp5ljuulf"/></g>`,
		"fallback": "solar:airbuds-case-minimalistic-bold-duotone",
	});
}

export default Component;
