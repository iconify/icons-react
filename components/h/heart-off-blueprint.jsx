import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/g/g9lml7boe.css';
import '../../css/m/muhsa3p5n.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/d/d1vz3k5ov.css';
import '../../css/v/v3uzkxb0u.css';
import '../../css/d/d29_r0i9a.css';
import '../../css/d/d6b7dubbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="g9lml7boe wm-deco"/><path class="muhsa3p5n wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="d1vz3k5ov wm-k"/><path class="v3uzkxb0u wm-s"/><path class="d29_r0i9a wm-k"/><path class="d6b7dubbd wm-s"/></g>`,
		"fallback": "withicons:heart-off-blueprint",
	});
}

export default Component;
