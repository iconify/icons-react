import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/ryee2pbxe.css';
import '../../css/h/huiksqehg.css';
import '../../css/t/ty8ph38sn.css';
import '../../css/z/zkgv-lqnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ryee2pbxe wm-deco"/><path class="huiksqehg wm-deco"/><path class="ty8ph38sn wm-k"/><path class="wm-a zkgv-lqnl"/></g>`,
		"fallback": "withicons:bamboo-blueprint",
	});
}

export default Component;
