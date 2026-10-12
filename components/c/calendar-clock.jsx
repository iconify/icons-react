import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sm_karjot.css';
import '../../css/i/ifivxibrp.css';
import '../../css/r/rmz5vlbcs.css';
import '../../css/s/s328x16br.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="sm_karjot"/><rect class="ifivxibrp"/><circle class="rmz5vlbcs"/><path class="s328x16br"/></g>`,
		"fallback": "andrsrxn:calendar-clock",
	});
}

export default Component;
