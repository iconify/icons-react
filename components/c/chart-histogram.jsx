import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/g/g_12-kblq.css';
import '../../css/y/ype_babxd.css';
import '../../css/i/ihxph8b_f.css';
import '../../css/b/b5ql37bfq.css';
import '../../css/c/cpuba4h2g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="g_12-kblq"/><path class="ype_babxd"/><path class="ihxph8b_f"/><path class="b5ql37bfq"/><path class="cpuba4h2g"/></g>`,
		"fallback": "icon-park:chart-histogram",
	});
}

export default Component;
