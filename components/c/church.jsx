import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/p/p7ozhwb8g.css';
import '../../css/n/n78vp2bgg.css';
import '../../css/k/k_bitrnlx.css';
import '../../css/e/eigdfn47d.css';
import '../../css/y/y_fqobb9e.css';
import '../../css/r/rj2e_2hxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="p7ozhwb8g"/><path class="n78vp2bgg"/><path class="k_bitrnlx wm-shine"/><path class="eigdfn47d wm-k"/><path class="wm-a y_fqobb9e"/><path class="rj2e_2hxk wm-s"/></g>`,
		"fallback": "withicons-kawaii:church",
	});
}

export default Component;
