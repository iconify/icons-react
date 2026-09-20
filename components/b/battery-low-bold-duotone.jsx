import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/txmeiryss.css';
import '../../css/u/uhm_niifn.css';
import '../../css/i/i6w8b0b2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="txmeiryss"/><path class="uhm_niifn"/><path class="i6w8b0b2o"/></g>`,
		"fallback": "solar:battery-low-bold-duotone",
	});
}

export default Component;
