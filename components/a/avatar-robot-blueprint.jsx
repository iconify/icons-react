import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vwh_dab7b.css';
import '../../css/u/u9meep4ar.css';
import '../../css/b/bxjv56brc.css';
import '../../css/t/tc7pn6bgq.css';
import '../../css/q/qsqdynpdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="vwh_dab7b wm-deco"/><path class="u9meep4ar wm-deco"/><path class="bxjv56brc wm-deco"/><path class="tc7pn6bgq wm-k"/><path class="qsqdynpdz wm-a"/></g>`,
		"fallback": "withicons:avatar-robot-blueprint",
	});
}

export default Component;
