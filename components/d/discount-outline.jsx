import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kh24-wisb.css';
import '../../css/j/j8oohibxs.css';
import '../../css/v/v9_ws6bey.css';
import '../../css/x/xns_rckoq.css';
import '../../css/v/v0sro-x5z.css';
import '../../css/l/lnp6hssgn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kh24-wisb"/><path clip-rule="evenodd" class="j8oohibxs"/><path clip-rule="evenodd" class="v9_ws6bey"/><path class="xns_rckoq"/><path clip-rule="evenodd" class="v0sro-x5z"/><path clip-rule="evenodd" class="lnp6hssgn"/></g>`,
		"fallback": "glyphs:discount-outline",
	});
}

export default Component;
