import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/b/b_uklmz5k.css';
import '../../css/l/lwd6_fblb.css';
import '../../css/u/u2irbzk5g.css';
import '../../css/f/fy7hect6f.css';
import '../../css/j/jf5d48bwz.css';
import '../../css/z/z_ttpkb1m.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="d2kvgvbvc"><g class="xyjtgccot"><path class="b_uklmz5k"/><path class="lwd6_fblb"/><path class="u2irbzk5g"/></g><path class="fy7hect6f"/><path class="jf5d48bwz"/><path class="z_ttpkb1m"/></g><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:arrow-down-left-off",
	});
}

export default Component;
