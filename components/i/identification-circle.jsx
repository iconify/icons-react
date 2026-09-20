import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/g/grlvcfb_w.css';
import '../../css/h/h36sa31ok.css';
import '../../css/q/qwsb0-m-k.css';
import '../../css/q/q3d0nnoea.css';
import '../../css/z/z2-2dcb8h.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><path clip-rule="evenodd" class="grlvcfb_w"/><path clip-rule="evenodd" class="h36sa31ok"/><path clip-rule="evenodd" class="qwsb0-m-k"/><path class="q3d0nnoea"/><path class="z2-2dcb8h"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-print:identification-circle",
	});
}

export default Component;
