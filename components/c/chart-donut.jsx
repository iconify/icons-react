import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/ab_-mwb9e.css';
import '../../css/x/x6bwb1mzx.css';
import '../../css/e/ee28qp0nf.css';
import '../../css/z/zcd_-mq2h.css';
import '../../css/u/ualrpgq_q.css';
import '../../css/p/pcbpn0bze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ab_-mwb9e wm-shadow"/><path class="x6bwb1mzx"/><path class="ee28qp0nf"/><path class="zcd_-mq2h"/><path class="ualrpgq_q"/><path class="pcbpn0bze"/></g>`,
		"fallback": "withicons-retro:chart-donut",
	});
}

export default Component;
