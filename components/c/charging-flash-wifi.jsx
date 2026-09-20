import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x5-t23b_v.css';
import '../../css/c/cgl-gvb4h.css';
import '../../css/x/x7grdtbqm.css';
import '../../css/p/psfhnqc2f.css';
import '../../css/w/wbd5_fb5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x5-t23b_v"/><path class="cgl-gvb4h"/><path class="x7grdtbqm"/><path class="psfhnqc2f"/><path class="wbd5_fb5e"/></g>`,
		"fallback": "streamline-ultimate-color:charging-flash-wifi",
	});
}

export default Component;
