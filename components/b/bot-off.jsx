import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wf2y1s6dv.css';
import '../../css/w/ws085pbck.css';
import '../../css/r/r4f-rbb3p.css';
import '../../css/q/qg5w9bb9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="wf2y1s6dv"/><path class="ws085pbck"/><path class="r4f-rbb3p"/><path class="qg5w9bb9h"/></g>`,
		"fallback": "hugeicons:bot-off",
	});
}

export default Component;
