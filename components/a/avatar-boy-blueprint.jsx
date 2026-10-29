import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/krnf_lb1i.css';
import '../../css/s/sdaucgb_l.css';
import '../../css/y/yngdrubjf.css';
import '../../css/g/gf2eq-byc.css';
import '../../css/w/wizruzb9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="krnf_lb1i wm-deco"/><path class="sdaucgb_l wm-deco"/><path class="wm-k yngdrubjf"/><path class="gf2eq-byc wm-k"/><path class="wizruzb9t wm-k"/></g>`,
		"fallback": "withicons:avatar-boy-blueprint",
	});
}

export default Component;
