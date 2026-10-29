import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/ufn3m0bhg.css';
import '../../css/r/r89a8rhhw.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/l/lcj2fov3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ufn3m0bhg wm-deco"/><path class="r89a8rhhw wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="lcj2fov3c"/></g>`,
		"fallback": "withicons:heart-gift-blueprint",
	});
}

export default Component;
