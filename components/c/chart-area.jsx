import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sr25z3bhd.css';
import '../../css/d/d5cn6-g7r.css';
import '../../css/g/g0_j010xc.css';
import '../../css/e/exesm_-ho.css';
import '../../css/o/odxxr87nt.css';
import '../../css/f/f8pnrob-z.css';
import '../../css/d/dhl55_r1i.css';
import '../../css/q/qpnoxv20r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sr25z3bhd wm-shadow"/><path class="d5cn6-g7r wm-k"/><path class="g0_j010xc wm-k"/><path class="exesm_-ho wm-a"/><path class="odxxr87nt wm-a"/><path class="f8pnrob-z wm-a"/><path class="dhl55_r1i wm-a"/><path class="qpnoxv20r wm-a"/>`,
		"fallback": "withicons-pastel:chart-area",
	});
}

export default Component;
