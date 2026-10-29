import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/wdy7m4cqz.css';
import '../../css/e/e363s6csv.css';
import '../../css/x/xgxm_7bin.css';
import '../../css/p/pdp5-ybyr.css';
import '../../css/h/h0tj1xbrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wdy7m4cqz wm-deco"/><path class="e363s6csv wm-deco"/><path class="wm-deco xgxm_7bin"/><path class="pdp5-ybyr"/><path class="h0tj1xbrb"/></g>`,
		"fallback": "withicons:headset-blueprint",
	});
}

export default Component;
