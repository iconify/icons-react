import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/w8l77e8qs.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/n/n_l4tzbxl.css';
import '../../css/y/yk993owos.css';
import '../../css/v/v3uzkxb0u.css';
import '../../css/s/sf2pssuxq.css';
import '../../css/d/d6b7dubbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="w8l77e8qs wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="n_l4tzbxl wm-k"/><path class="wm-a yk993owos"/><path class="v3uzkxb0u wm-s"/><path class="sf2pssuxq wm-k"/><path class="d6b7dubbd wm-s"/></g>`,
		"fallback": "withicons:calendar-off-blueprint",
	});
}

export default Component;
