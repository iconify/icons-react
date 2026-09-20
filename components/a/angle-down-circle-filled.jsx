import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjzzbm_-c.css';
import '../../css/g/gw1pqjbou.css';
import '../../css/c/c24i1_r7s.css';
import '../../css/q/q2lpa00qg.css';
import '../../css/n/nfb842b_s.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hjzzbm_-c"/><path class="gw1pqjbou"/><path class="c24i1_r7s"/><path class="q2lpa00qg"/><path class="nfb842b_s"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-print:angle-down-circle-filled",
	});
}

export default Component;
