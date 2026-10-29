import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/axhg_lbec.css';
import '../../css/m/mhdr543mh.css';
import '../../css/d/dq5cs_wno.css';
import '../../css/z/zuoncxwim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="axhg_lbec wm-deco"/><path class="mhdr543mh wm-deco"/><path class="dq5cs_wno"/><path class="zuoncxwim"/></g>`,
		"fallback": "withicons:align-left-blueprint",
	});
}

export default Component;
