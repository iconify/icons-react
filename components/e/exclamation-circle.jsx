import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/x/xyjtgccot.css';
import '../../css/t/tpt4cybya.css';
import '../../css/t/te_vsvmkm.css';
import '../../css/s/sl1u3-b3g.css';
import '../../css/o/o9rkjl_xn.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g class="xyjtgccot"><path clip-rule="evenodd" class="tpt4cybya"/><path class="te_vsvmkm"/></g><path clip-rule="evenodd" class="sl1u3-b3g"/><path class="o9rkjl_xn"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-print:exclamation-circle",
	});
}

export default Component;
