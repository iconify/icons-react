import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/r6ne5ub5z.css';
import '../../css/k/kvtx_h5hu.css';
import '../../css/b/bxjv56brc.css';
import '../../css/s/sqt-7jbtw.css';
import '../../css/z/zcdoimbco.css';
import '../../css/p/peqi26xdy.css';
import '../../css/i/iku1ywbvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="r6ne5ub5z wm-deco"/><path class="kvtx_h5hu wm-deco"/><path class="bxjv56brc wm-deco"/><path class="sqt-7jbtw wm-k"/><path class="wm-k zcdoimbco"/><path class="peqi26xdy wm-a"/><path class="iku1ywbvc wm-k"/></g>`,
		"fallback": "withicons:avatar-fox-blueprint",
	});
}

export default Component;
