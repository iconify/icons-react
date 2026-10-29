import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/dwbio1b7i.css';
import '../../css/e/ezxvi_nvu.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/k/kvozr-b3p.css';
import '../../css/j/jpij_nbji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="dwbio1b7i wm-deco"/><path class="ezxvi_nvu wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="kvozr-b3p"/><path class="jpij_nbji"/></g>`,
		"fallback": "withicons:arrow-big-up-blueprint",
	});
}

export default Component;
