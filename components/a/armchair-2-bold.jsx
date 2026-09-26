import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/raupl6bzc.css';
import '../../css/r/rek_6vbvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="raupl6bzc"/><path class="rek_6vbvt"/></g>`,
		"fallback": "solar:armchair-2-bold",
	});
}

export default Component;
