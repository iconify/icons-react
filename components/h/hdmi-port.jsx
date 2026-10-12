import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ozw4adbmz.css';
import '../../css/t/t0qvfmudm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ozw4adbmz"/><path class="t0qvfmudm"/></g>`,
		"fallback": "andrsrxn:hdmi-port",
	});
}

export default Component;
