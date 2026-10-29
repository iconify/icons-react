import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vd9kimbsu.css';
import '../../css/r/r0e2nujzx.css';
import '../../css/s/sdaucgb_l.css';
import '../../css/s/sumcvejxs.css';
import '../../css/v/vr57sgb0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="vd9kimbsu wm-deco"/><path class="r0e2nujzx wm-deco"/><path class="sdaucgb_l wm-deco"/><path class="sumcvejxs"/><path class="vr57sgb0t"/></g>`,
		"fallback": "withicons:droplet-blueprint",
	});
}

export default Component;
