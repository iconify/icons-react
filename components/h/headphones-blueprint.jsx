import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/dif6l3b3v.css';
import '../../css/z/z_lvdcbvt.css';
import '../../css/t/t218te2ox.css';
import '../../css/w/w5e41ybud.css';
import '../../css/r/r0v6itbzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="dif6l3b3v wm-deco"/><path class="wm-deco z_lvdcbvt"/><path class="t218te2ox wm-deco"/><path class="w5e41ybud wm-k"/><path class="r0v6itbzy wm-a"/></g>`,
		"fallback": "withicons:headphones-blueprint",
	});
}

export default Component;
