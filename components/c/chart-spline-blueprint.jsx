import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/u7d2hzbvv.css';
import '../../css/b/bxjv56brc.css';
import '../../css/z/zx7-jz3bd.css';
import '../../css/l/lrg-fdc4r.css';
import '../../css/z/z2x8tcb6h.css';
import '../../css/u/uqhmd6bht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="u7d2hzbvv wm-deco"/><path class="bxjv56brc wm-deco"/><path class="wm-k zx7-jz3bd"/><path class="lrg-fdc4r wm-a"/><path class="wm-k z2x8tcb6h"/><path class="uqhmd6bht wm-a"/></g>`,
		"fallback": "withicons:chart-spline-blueprint",
	});
}

export default Component;
