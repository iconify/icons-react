import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/m/mrentlb0t.css';
import '../../css/a/ayj2nrm-v.css';
import '../../css/l/l00otmbzz.css';
import '../../css/c/c9dhhpbwa.css';
import '../../css/z/zb54dbb5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="mrentlb0t wm-deco"/><path class="ayj2nrm-v wm-deco"/><path class="l00otmbzz wm-deco"/><path class="c9dhhpbwa"/><path class="zb54dbb5w"/></g>`,
		"fallback": "withicons:dumbbell-blueprint",
	});
}

export default Component;
