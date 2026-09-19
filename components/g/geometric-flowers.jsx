import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/l/lzj8zkbnp.css';
import '../../css/h/h61gupbbc.css';
import '../../css/l/lu0z514vn.css';
import '../../css/y/yuwe4-b3k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="lzj8zkbnp"/><path class="h61gupbbc"/><path class="lu0z514vn"/><path class="yuwe4-b3k"/></g>`,
		"fallback": "icon-park:geometric-flowers",
	});
}

export default Component;
