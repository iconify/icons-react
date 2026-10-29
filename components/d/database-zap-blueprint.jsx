import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/q/q_xx7ncgw.css';
import '../../css/r/rkjw2wbas.css';
import '../../css/h/hpz6d-b6h.css';
import '../../css/l/lpt-7tbgr.css';
import '../../css/r/rb2w4qb1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="q_xx7ncgw wm-deco"/><path class="rkjw2wbas wm-deco"/><path class="hpz6d-b6h wm-deco"/><path class="lpt-7tbgr"/><path class="rb2w4qb1b"/></g>`,
		"fallback": "withicons:database-zap-blueprint",
	});
}

export default Component;
