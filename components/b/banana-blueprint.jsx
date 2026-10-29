import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/zjxf0acmm.css';
import '../../css/l/lu1ane3la.css';
import '../../css/s/sfhccvmst.css';
import '../../css/c/c5-x4cbou.css';
import '../../css/v/vxyac5iur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco zjxf0acmm"/><path class="lu1ane3la wm-deco"/><path class="sfhccvmst wm-deco"/><path class="c5-x4cbou wm-k"/><path class="vxyac5iur wm-a"/></g>`,
		"fallback": "withicons:banana-blueprint",
	});
}

export default Component;
