import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z8y5cubeq.css';
import '../../css/y/yjfcq91so.css';
import '../../css/z/z_r3qhb9a.css';
import '../../css/b/btm1o_g-t.css';
import '../../css/p/ph9evu1-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z8y5cubeq"/><path class="yjfcq91so"/><path class="z_r3qhb9a"/><path class="btm1o_g-t"/><path class="ph9evu1-a"/></g>`,
		"fallback": "solar:boombox-bold-duotone",
	});
}

export default Component;
