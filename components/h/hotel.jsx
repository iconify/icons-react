import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dgwlyubic.css';
import '../../css/o/ohjklpuln.css';
import '../../css/o/oaildwbhf.css';
import '../../css/o/oc1d-ibzc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dgwlyubic"/><path class="ohjklpuln"/><path class="oaildwbhf"/><path class="oc1d-ibzc"/></g>`,
		"fallback": "glyphs-poly:hotel",
	});
}

export default Component;
