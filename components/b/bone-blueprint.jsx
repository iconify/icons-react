import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/wt_palbew.css';
import '../../css/o/o7f98jbya.css';
import '../../css/r/r65vtx55l.css';
import '../../css/v/vbhvu6boy.css';
import '../../css/x/xsvsuubze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco wt_palbew"/><path class="o7f98jbya wm-deco"/><path class="r65vtx55l wm-deco"/><path class="vbhvu6boy"/><path class="xsvsuubze"/></g>`,
		"fallback": "withicons:bone-blueprint",
	});
}

export default Component;
