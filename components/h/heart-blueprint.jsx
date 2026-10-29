import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/o/oiy2qljci.css';
import '../../css/q/q_xh2r7cs.css';
import '../../css/n/nge5cfbll.css';
import '../../css/k/krslsibqq.css';
import '../../css/p/pce7ldb7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="oiy2qljci wm-deco"/><path class="q_xh2r7cs wm-deco"/><path class="nge5cfbll wm-deco"/><path class="krslsibqq"/><path class="pce7ldb7f"/></g>`,
		"fallback": "withicons:heart-blueprint",
	});
}

export default Component;
