import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d-0wsmbwk.css';
import '../../css/x/x3yzopyze.css';
import '../../css/s/s1bj---5h.css';
import '../../css/l/lt_f0mcqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d-0wsmbwk"/><rect class="x3yzopyze"/><path class="s1bj---5h"/><path class="lt_f0mcqd"/></g>`,
		"fallback": "andrsrxn:fire-extinguisher",
	});
}

export default Component;
