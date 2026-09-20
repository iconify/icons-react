import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y6-b8lbmz.css';
import '../../css/i/ibzn7fbhv.css';
import '../../css/w/w10e_1ble.css';
import '../../css/u/udraxabbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y6-b8lbmz"/><path class="ibzn7fbhv"/><path class="w10e_1ble"/><path class="udraxabbd"/></g>`,
		"fallback": "solar:inbox-archive-bold-duotone",
	});
}

export default Component;
