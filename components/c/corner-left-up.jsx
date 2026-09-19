import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/u/upd33_b0a.css';
import '../../css/l/lc63-lb6y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="upd33_b0a"/><path class="lc63-lb6y"/></g>`,
		"fallback": "icon-park:corner-left-up",
	});
}

export default Component;
