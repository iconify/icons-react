import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/li5dbubvl.css';
import '../../css/o/o5fivpbod.css';
import '../../css/r/rg1pxqrvo.css';
import '../../css/m/m2kke9-ot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="li5dbubvl"/><rect class="o5fivpbod"/><rect class="rg1pxqrvo"/><path class="m2kke9-ot"/></g>`,
		"fallback": "andrsrxn:cpu",
	});
}

export default Component;
