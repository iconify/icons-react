import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/old_7oj4c.css';
import '../../css/l/lb_svwuwq.css';
import '../../css/w/w--x1k88b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="old_7oj4c"/><rect class="lb_svwuwq"/><rect class="w--x1k88b"/></g>`,
		"fallback": "icon-park:bottle-three",
	});
}

export default Component;
