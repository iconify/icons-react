import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/g/g_12-kblq.css';
import '../../css/u/uumk3cclk.css';
import '../../css/r/r5xryvj2q.css';
import '../../css/r/ro2e2lb5q.css';
import '../../css/t/to2v25exy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="g_12-kblq"/><path class="uumk3cclk"/><path class="r5xryvj2q"/><path class="ro2e2lb5q"/><path class="to2v25exy"/></g>`,
		"fallback": "icon-park:chart-histogram-one",
	});
}

export default Component;
