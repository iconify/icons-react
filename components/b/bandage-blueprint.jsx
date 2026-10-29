import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/jfxisz_aj.css';
import '../../css/m/m0c6rpfxz.css';
import '../../css/v/vbvx6cakn.css';
import '../../css/q/q5dnpjb2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="jfxisz_aj wm-deco"/><path class="m0c6rpfxz wm-deco"/><path class="vbvx6cakn wm-deco"/><path class="q5dnpjb2i"/></g>`,
		"fallback": "withicons:bandage-blueprint",
	});
}

export default Component;
