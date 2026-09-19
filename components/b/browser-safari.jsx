import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6skkmbbi.css';
import '../../css/w/w1-vn2b_x.css';
import '../../css/u/u9vhk67pq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a6skkmbbi"/><path class="w1-vn2b_x"/><path clip-rule="evenodd" class="u9vhk67pq"/></g>`,
		"fallback": "icon-park:browser-safari",
	});
}

export default Component;
