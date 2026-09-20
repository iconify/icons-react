import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d83pj63ue.css';
import '../../css/g/g2c04dyyx.css';
import '../../css/o/ok_z3y4df.css';
import '../../css/r/r2lhvq26x.css';
import '../../css/p/psv6jlkbl.css';
import '../../css/n/niumdbq7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="d83pj63ue"/><path class="g2c04dyyx"/><path class="ok_z3y4df"/><path class="r2lhvq26x"/><path class="psv6jlkbl"/><path class="niumdbq7j"/></g>`,
		"fallback": "solar:cup-linear",
	});
}

export default Component;
