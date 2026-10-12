import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rh1gs8bqi.css';
import '../../css/q/qtmq76bec.css';
import '../../css/m/miq1pw1fw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rh1gs8bqi"/><circle class="qtmq76bec"/><path class="miq1pw1fw"/></g>`,
		"fallback": "andrsrxn:alarm-play",
	});
}

export default Component;
