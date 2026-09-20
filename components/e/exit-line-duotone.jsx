import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sk1228b2x.css';
import '../../css/e/ezshh0bgn.css';
import '../../css/l/lum82dbar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sk1228b2x"/><path class="ezshh0bgn"/><path class="lum82dbar"/></g>`,
		"fallback": "solar:exit-line-duotone",
	});
}

export default Component;
