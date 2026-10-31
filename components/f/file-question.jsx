import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/istla7b2p.css';
import '../../css/w/wx29s97gi.css';
import '../../css/e/e1q0evbrz.css';
import '../../css/c/cp_k2trpi.css';
import '../../css/o/oobfojb3k.css';
import '../../css/u/up93jbb5y.css';
import '../../css/y/yrs01nb6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="istla7b2p wm-k"/><path class="wm-deco wx29s97gi"/><path class="e1q0evbrz wm-k"/><path class="cp_k2trpi wm-k"/><path class="oobfojb3k wm-shadow"/><path class="up93jbb5y wm-shine"/><path class="wm-shine yrs01nb6l"/></g>`,
		"fallback": "withicons-valentine:file-question",
	});
}

export default Component;
