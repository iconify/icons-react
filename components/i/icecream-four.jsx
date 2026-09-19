import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/tldw-pb3f.css';
import '../../css/b/bwz16r81d.css';
import '../../css/x/xo0nxdqxm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="tldw-pb3f"/><path class="bwz16r81d"/><path class="xo0nxdqxm"/></g>`,
		"fallback": "icon-park:icecream-four",
	});
}

export default Component;
