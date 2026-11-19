import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kyfgssd0z.css';
import '../../css/i/iaicy-3kp.css';
import '../../css/i/ige_o2b4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kyfgssd0z"/><path class="iaicy-3kp"/><path class="ige_o2b4i"/></g>`,
		"fallback": "andrsrxn:clock-twelve",
	});
}

export default Component;
