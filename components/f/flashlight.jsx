import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/g8sg7owla.css';
import '../../css/x/xx_f9w-bm.css';
import '../../css/t/t6vd0rs1s.css';
import '../../css/z/z7u_hef_k.css';
import '../../css/g/ggj6i-brt.css';
import '../../css/p/p_ymqccat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="g8sg7owla wm-shadow"/><path class="xx_f9w-bm"/><path class="t6vd0rs1s"/><path class="z7u_hef_k"/><path class="ggj6i-brt"/><path class="p_ymqccat wm-s"/></g>`,
		"fallback": "withicons-retro:flashlight",
	});
}

export default Component;
