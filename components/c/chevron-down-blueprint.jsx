import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/lx2k10m7m.css';
import '../../css/j/j6ucl9bbz.css';
import '../../css/o/o835chb2f.css';
import '../../css/b/bsjsm791p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="lx2k10m7m wm-deco"/><path class="j6ucl9bbz wm-deco"/><path class="o835chb2f"/><path class="bsjsm791p"/></g>`,
		"fallback": "withicons:chevron-down-blueprint",
	});
}

export default Component;
