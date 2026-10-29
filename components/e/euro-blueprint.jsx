import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/tlirfxwnd.css';
import '../../css/r/rkdjjkbvw.css';
import '../../css/o/oq27kf3sz.css';
import '../../css/k/k431cdbin.css';
import '../../css/g/g_qa_x7le.css';
import '../../css/c/c12yn3gdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="tlirfxwnd wm-deco"/><path class="rkdjjkbvw wm-deco"/><path class="oq27kf3sz wm-k"/><path class="k431cdbin wm-a"/><path class="g_qa_x7le wm-k"/><path class="c12yn3gdl wm-a"/></g>`,
		"fallback": "withicons:euro-blueprint",
	});
}

export default Component;
