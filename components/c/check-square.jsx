import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kbzksu78q.css';
import '../../css/t/t6yb2-bzn.css';
import '../../css/n/nc_5sobzd.css';
import '../../css/v/vxg4k9b0f.css';
import '../../css/c/cxr1s4b7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kbzksu78q wm-k"/><path class="t6yb2-bzn wm-k"/><path class="nc_5sobzd wm-k"/><path class="vxg4k9b0f wm-shine"/><path class="cxr1s4b7f wm-a"/></g>`,
		"fallback": "withicons-anime:check-square",
	});
}

export default Component;
