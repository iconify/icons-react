import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pn6x5_bim.css';
import '../../css/a/awmsyvf0e.css';
import '../../css/c/cyyxj_bur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pn6x5_bim"/><path class="awmsyvf0e"/><path class="cyyxj_bur"/></g>`,
		"fallback": "solar:brain-linear",
	});
}

export default Component;
