import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/z_eqswwmj.css';
import '../../css/e/eyvxrg93r.css';
import '../../css/w/wr92o1bsm.css';
import '../../css/l/lr95qxbbp.css';
import '../../css/r/r3x92bjpk.css';
import '../../css/q/q294q2b5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco z_eqswwmj"/><path class="eyvxrg93r wm-deco"/><path class="wm-deco wr92o1bsm"/><path class="lr95qxbbp wm-k"/><path class="r3x92bjpk wm-a"/><path class="q294q2b5s wm-a"/></g>`,
		"fallback": "withicons:gallery-horizontal-blueprint",
	});
}

export default Component;
