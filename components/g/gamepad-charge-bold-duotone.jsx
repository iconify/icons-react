import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ki79dlb4f.css';
import '../../css/m/m-qn_rbyu.css';
import '../../css/a/ap2s0m7in.css';
import '../../css/q/q9owr1m9n.css';
import '../../css/w/wng0vw_sp.css';
import '../../css/t/tpnfn4b2j.css';
import '../../css/e/ek9i4zbca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ki79dlb4f"/><path class="m-qn_rbyu"/><path class="ap2s0m7in"/><path class="q9owr1m9n"/><path class="wng0vw_sp"/><path class="tpnfn4b2j"/><path class="ek9i4zbca"/></g>`,
		"fallback": "solar:gamepad-charge-bold-duotone",
	});
}

export default Component;
