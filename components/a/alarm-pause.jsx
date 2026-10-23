import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ow38ecb0p.css';
import '../../css/q/qtmq76bec.css';
import '../../css/w/wcj2rxqpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ow38ecb0p"/><circle class="qtmq76bec"/><path class="wcj2rxqpy"/></g>`,
		"fallback": "andrsrxn:alarm-pause",
	});
}

export default Component;
