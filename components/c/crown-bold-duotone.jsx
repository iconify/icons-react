import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p2gcedbpg.css';
import '../../css/r/rig0wobgm.css';
import '../../css/c/cnkwybbwb.css';
import '../../css/x/xt6485bfx.css';
import '../../css/q/qin03mc9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="p2gcedbpg"/><path class="rig0wobgm"/><path class="cnkwybbwb"/><path class="xt6485bfx"/><path class="qin03mc9p"/></g>`,
		"fallback": "solar:crown-bold-duotone",
	});
}

export default Component;
