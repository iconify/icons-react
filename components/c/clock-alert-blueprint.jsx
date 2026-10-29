import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/dd7h74lvq.css';
import '../../css/s/sbcphdcdx.css';
import '../../css/m/mwxzkr41k.css';
import '../../css/j/jn70pab_v.css';
import '../../css/f/f78e21b0t.css';
import '../../css/j/j3l-vfqkm.css';
import '../../css/f/f2x-57bcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="dd7h74lvq wm-deco"/><path class="sbcphdcdx wm-deco"/><path class="mwxzkr41k wm-deco"/><path class="jn70pab_v wm-k"/><path class="f78e21b0t wm-a"/><path class="j3l-vfqkm wm-s"/><path class="f2x-57bcp wm-k"/></g>`,
		"fallback": "withicons:clock-alert-blueprint",
	});
}

export default Component;
