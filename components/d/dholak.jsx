import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/i/i5jkyfbio.css';
import '../../css/m/m6dlot_ns.css';
import '../../css/p/pnrd7bcaq.css';
import '../../css/z/z0zm-9b7j.css';
import '../../css/l/lisx4xbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="i5jkyfbio"/><path class="m6dlot_ns"/><path class="pnrd7bcaq wm-k"/><path class="wm-a z0zm-9b7j"/><path class="lisx4xbvx wm-deco"/></g>`,
		"fallback": "withicons-kawaii:dholak",
	});
}

export default Component;
