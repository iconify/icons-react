import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/y/yuo73jbol.css';
import '../../css/p/pb_h1c_pj.css';
import '../../css/l/l5bot_fnt.css';
import '../../css/b/bvtjggbmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="yuo73jbol"/><path class="pb_h1c_pj wm-shine"/><path class="l5bot_fnt"/><path class="bvtjggbmx wm-deco"/></g>`,
		"fallback": "withicons-kawaii:filter",
	});
}

export default Component;
