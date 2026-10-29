import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/ar1vi6b-r.css';
import '../../css/m/muhsa3p5n.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/a/apmg-mbxj.css';
import '../../css/v/v3uzkxb0u.css';
import '../../css/d/dtmizcbzv.css';
import '../../css/d/d6b7dubbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ar1vi6b-r wm-deco"/><path class="muhsa3p5n wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="apmg-mbxj wm-k"/><path class="v3uzkxb0u wm-s"/><path class="dtmizcbzv wm-k"/><path class="d6b7dubbd wm-s"/></g>`,
		"fallback": "withicons:bluetooth-off-blueprint",
	});
}

export default Component;
