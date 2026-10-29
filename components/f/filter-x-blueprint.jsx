import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/utd2a1e8u.css';
import '../../css/n/neej5ybvl.css';
import '../../css/m/mx_f04b2t.css';
import '../../css/y/y39ff910h.css';
import '../../css/f/f9b4d59gs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="utd2a1e8u wm-deco"/><path class="neej5ybvl wm-deco"/><path class="mx_f04b2t wm-deco"/><path class="wm-k y39ff910h"/><path class="f9b4d59gs wm-s"/></g>`,
		"fallback": "withicons:filter-x-blueprint",
	});
}

export default Component;
