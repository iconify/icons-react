import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/b/bs3yktbdp.css';
import '../../css/y/y6-s0lb2s.css';
import '../../css/l/lp5eisb1t.css';
import '../../css/i/i1pyrshdf.css';
import '../../css/d/d88nyzisv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="bs3yktbdp"/><path class="wm-shine y6-s0lb2s"/><path class="lp5eisb1t wm-k"/><path class="i1pyrshdf wm-a"/><path class="d88nyzisv wm-deco"/></g>`,
		"fallback": "withicons-kawaii:cube",
	});
}

export default Component;
