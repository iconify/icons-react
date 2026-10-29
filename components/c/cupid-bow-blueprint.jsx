import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/e-lr70b5u.css';
import '../../css/e/e2f20sb2g.css';
import '../../css/d/du2d72bnd.css';
import '../../css/k/ktd08lbar.css';
import '../../css/h/hfvky3-vb.css';
import '../../css/p/prkhwsbmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="e-lr70b5u wm-deco"/><path class="e2f20sb2g wm-deco"/><path class="du2d72bnd wm-deco"/><path class="ktd08lbar wm-k"/><path class="hfvky3-vb wm-a"/><path class="prkhwsbmv wm-k"/></g>`,
		"fallback": "withicons:cupid-bow-blueprint",
	});
}

export default Component;
