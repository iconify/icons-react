import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/exq_zt9fz.css';
import '../../css/a/a2l1-fb5z.css';
import '../../css/s/svgasp4fw.css';
import '../../css/k/k7s_0pbqz.css';
import '../../css/u/uli4nkb_b.css';
import '../../css/z/ze62g0bie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="exq_zt9fz wm-deco"/><path class="a2l1-fb5z wm-deco"/><path class="svgasp4fw wm-deco"/><path class="k7s_0pbqz wm-k"/><path class="uli4nkb_b wm-a"/><path class="wm-a ze62g0bie"/></g>`,
		"fallback": "withicons:hand-heart-blueprint",
	});
}

export default Component;
