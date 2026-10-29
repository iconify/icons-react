import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/rwpi7vbim.css';
import '../../css/i/i40h4cbms.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/b/brottctmy.css';
import '../../css/y/y_fqobb9e.css';
import '../../css/r/rj2e_2hxk.css';
import '../../css/e/e-ymzo5po.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="rwpi7vbim wm-deco"/><path class="i40h4cbms wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="brottctmy wm-k"/><path class="wm-a y_fqobb9e"/><path class="rj2e_2hxk wm-s"/><path class="e-ymzo5po wm-k"/></g>`,
		"fallback": "withicons:church-blueprint",
	});
}

export default Component;
