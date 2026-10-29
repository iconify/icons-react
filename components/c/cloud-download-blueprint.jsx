import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/xwzsrfbmo.css';
import '../../css/a/a6pbds5ak.css';
import '../../css/z/zuz4edb2y.css';
import '../../css/n/n_5-0vzwy.css';
import '../../css/w/w1mh_qbnr.css';
import '../../css/u/ud_2tibfg.css';
import '../../css/z/zwffvbc-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco xwzsrfbmo"/><path class="a6pbds5ak wm-deco"/><path class="wm-deco zuz4edb2y"/><path class="n_5-0vzwy wm-k"/><path class="w1mh_qbnr wm-k"/><path class="ud_2tibfg wm-s"/><path class="wm-s zwffvbc-e"/></g>`,
		"fallback": "withicons:cloud-download-blueprint",
	});
}

export default Component;
