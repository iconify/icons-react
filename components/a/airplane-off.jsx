import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x4mv_4b8r.css';
import '../../css/q/qnl59jbzg.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x4mv_4b8r"/><path clip-rule="evenodd" class="qnl59jbzg"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:airplane-off",
	});
}

export default Component;
