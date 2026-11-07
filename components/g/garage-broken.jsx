import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xpzbxokqs.css';
import '../../css/f/fp69pgcrt.css';
import '../../css/l/lbfuos7ub.css';
import '../../css/o/o7iew9atz.css';
import '../../css/k/kpbjqwesw.css';
import '../../css/o/o8epaoc8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xpzbxokqs"/><path class="fp69pgcrt"/><path class="lbfuos7ub"/><path class="o7iew9atz"/><path class="kpbjqwesw"/><path class="o8epaoc8a"/></g>`,
		"fallback": "solar:garage-broken",
	});
}

export default Component;
