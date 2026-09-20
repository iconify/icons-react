import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/e/extnxvbdz.css';
import '../../css/t/t2zhdp_cw.css';
import '../../css/j/jg_oybbbr.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="extnxvbdz"/><path clip-rule="evenodd" class="t2zhdp_cw"/></g><path clip-rule="evenodd" class="jg_oybbbr"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:grid-off",
	});
}

export default Component;
