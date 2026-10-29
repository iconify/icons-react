import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/akp3qbn-d.css';
import '../../css/w/wr92o1bsm.css';
import '../../css/q/qaf5-tble.css';
import '../../css/x/x4xcptb0y.css';
import '../../css/v/va6-6v82i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="akp3qbn-d wm-deco"/><path class="wm-deco wr92o1bsm"/><path class="qaf5-tble wm-k"/><path class="wm-a x4xcptb0y"/><path class="va6-6v82i wm-k"/></g>`,
		"fallback": "withicons:folder-lock-blueprint",
	});
}

export default Component;
