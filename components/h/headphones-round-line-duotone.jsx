import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/eoetq2b0d.css';
import '../../css/e/e_8kd3buu.css';
import '../../css/p/pbhj346_p.css';
import '../../css/c/c20zxwbse.css';
import '../../css/q/qicxzyeyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="eoetq2b0d"/><path class="e_8kd3buu"/><path class="pbhj346_p"/><path class="c20zxwbse"/><path class="qicxzyeyu"/></g>`,
		"fallback": "solar:headphones-round-line-duotone",
	});
}

export default Component;
