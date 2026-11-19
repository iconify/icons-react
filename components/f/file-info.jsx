import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nh46-cchg.css';
import '../../css/z/z0865achw.css';
import '../../css/l/lif1y5bmi.css';
import '../../css/q/qu-iwybrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nh46-cchg"/><path class="z0865achw"/><path class="lif1y5bmi"/><path class="qu-iwybrv"/></g>`,
		"fallback": "andrsrxn:file-info",
	});
}

export default Component;
