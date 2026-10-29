import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/b8binbbdb.css';
import '../../css/p/pqr5dtuud.css';
import '../../css/u/ul19i67dq.css';
import '../../css/s/sx059e3kk.css';
import '../../css/x/xn33u4brk.css';
import '../../css/w/wp83hc_bc.css';
import '../../css/p/p7p07ac_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="b8binbbdb wm-deco"/><path class="pqr5dtuud wm-deco"/><path class="ul19i67dq wm-deco"/><path class="sx059e3kk wm-k"/><path class="wm-a xn33u4brk"/><path class="wm-k wp83hc_bc"/><path class="p7p07ac_d wm-a"/></g>`,
		"fallback": "withicons:cloud-sun-blueprint",
	});
}

export default Component;
