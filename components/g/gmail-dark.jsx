import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/r/rmlr-cb_v.css';
import '../../css/s/s0o3wtbvh.css';
import '../../css/u/u80mkcbea.css';
import '../../css/h/hki4jtcxn.css';
import '../../css/u/uz6a7pbvy.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path class="rmlr-cb_v"/><path class="s0o3wtbvh"/><path class="u80mkcbea"/><path class="hki4jtcxn"/><path class="uz6a7pbvy"/></g>`,
		"fallback": "skill-icons:gmail-dark",
	});
}

export default Component;
