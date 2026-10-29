import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/o0k_7tbwd.css';
import '../../css/r/r_619x8dw.css';
import '../../css/p/pfp6hfb3z.css';
import '../../css/e/ewb4c0zlw.css';
import '../../css/p/pht4mnbru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="o0k_7tbwd"/><path class="r_619x8dw wm-a"/><path class="pfp6hfb3z wm-s"/><path class="ewb4c0zlw"/><path class="pht4mnbru wm-a"/></g>`,
		"fallback": "withicons:avatar-monster-duo",
	});
}

export default Component;
