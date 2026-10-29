import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/c/c6k5pz9qf.css';
import '../../css/a/aa1oedcpg.css';
import '../../css/f/fly5esi0x.css';
import '../../css/x/xfyuoc22x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="c6k5pz9qf wm-deco"/><path class="aa1oedcpg wm-deco"/><path class="fly5esi0x wm-k"/><path class="wm-a xfyuoc22x"/></g>`,
		"fallback": "withicons:battery-medium-blueprint",
	});
}

export default Component;
