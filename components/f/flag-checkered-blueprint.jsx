import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/fe7nz5gcb.css';
import '../../css/j/jkxyhhvft.css';
import '../../css/n/nd9n5bcbx.css';
import '../../css/j/j7juucx-d.css';
import '../../css/t/t9f0e3fmu.css';
import '../../css/j/j_5006u1z.css';
import '../../css/v/vrmi09zrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="fe7nz5gcb wm-deco"/><path class="jkxyhhvft wm-deco"/><path class="nd9n5bcbx wm-deco"/><path class="j7juucx-d wm-k"/><path class="t9f0e3fmu wm-a"/><path class="j_5006u1z wm-k"/><path class="vrmi09zrt wm-a"/></g>`,
		"fallback": "withicons:flag-checkered-blueprint",
	});
}

export default Component;
