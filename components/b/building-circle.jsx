import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/q/qx20qpboq.css';
import '../../css/o/o0inp7ygl.css';
import '../../css/x/x76r19xwu.css';
import '../../css/c/ckn51cykt.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><path clip-rule="evenodd" class="qx20qpboq"/><path class="o0inp7ygl"/><path class="x76r19xwu"/><path class="ckn51cykt"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-print:building-circle",
	});
}

export default Component;
