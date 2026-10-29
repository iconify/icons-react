import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/supf3ub8t.css';
import '../../css/x/x7rj2_mok.css';
import '../../css/s/sdaucgb_l.css';
import '../../css/t/tpry8yblv.css';
import '../../css/z/z4x45gbzd.css';
import '../../css/w/wcx4jtb-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="supf3ub8t wm-deco"/><path class="wm-deco x7rj2_mok"/><path class="sdaucgb_l wm-deco"/><path class="tpry8yblv wm-k"/><path class="wm-a z4x45gbzd"/><path class="wcx4jtb-e wm-k"/></g>`,
		"fallback": "withicons:flame-blueprint",
	});
}

export default Component;
