import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sa3qkvttp.css';
import '../../css/d/dm_xz7b1w.css';
import '../../css/a/aq_hwzb3g.css';
import '../../css/w/wbv-tibxs.css';
import '../../css/b/bd5n0i_hu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sa3qkvttp"/><path class="dm_xz7b1w"/><circle transform="rotate(90 5.76 19.27)" class="aq_hwzb3g"/><circle transform="rotate(90 14.35 19.27)" class="wbv-tibxs"/><path class="bd5n0i_hu"/></g>`,
		"fallback": "andrsrxn:forklift",
	});
}

export default Component;
