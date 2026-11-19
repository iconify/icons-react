import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tysee-w-u.css';
import '../../css/r/rrj58_bxo.css';
import '../../css/k/kc9fyubqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tysee-w-u"/><path class="rrj58_bxo"/><path class="kc9fyubqf"/></g>`,
		"fallback": "andrsrxn:device-pc-activity",
	});
}

export default Component;
