import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/z/z6mn0ywia.css';
import '../../css/h/hfi0s0bnr.css';
import '../../css/i/ir5a6zyvi.css';
import '../../css/j/jhp24ub2h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="z6mn0ywia"/><path class="hfi0s0bnr"/><path class="ir5a6zyvi"/><path class="jhp24ub2h"/></g>`,
		"fallback": "icon-park:four-leaves",
	});
}

export default Component;
