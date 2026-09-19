import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/x/xhsskobsv.css';
import '../../css/c/cbmhk7b8v.css';
import '../../css/d/d_tch1dwn.css';
import '../../css/m/mi30iebxs.css';
import '../../css/g/gw-r6lqrg.css';
import '../../css/f/fy2uzh-1h.css';
import '../../css/l/lg73phblg.css';
import '../../css/m/mnxue0bbw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path class="xhsskobsv"/><path clip-rule="evenodd" class="cbmhk7b8v"/><path class="d_tch1dwn"/><path clip-rule="evenodd" class="mi30iebxs"/></g><path clip-rule="evenodd" class="gw-r6lqrg"/><path clip-rule="evenodd" class="fy2uzh-1h"/><path clip-rule="evenodd" class="lg73phblg"/><path clip-rule="evenodd" class="mnxue0bbw"/></g>`,
		"fallback": "pepicons:clapperboard-print",
	});
}

export default Component;
