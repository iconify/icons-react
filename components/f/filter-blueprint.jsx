import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/iem-hmb5q.css';
import '../../css/b/bxjv56brc.css';
import '../../css/f/fwfa9msgm.css';
import '../../css/s/s4mxkt2by.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="iem-hmb5q wm-deco"/><path class="bxjv56brc wm-deco"/><path class="fwfa9msgm wm-k"/><path class="s4mxkt2by wm-k"/></g>`,
		"fallback": "withicons:filter-blueprint",
	});
}

export default Component;
