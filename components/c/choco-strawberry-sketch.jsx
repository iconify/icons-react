import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dp04q_i-b.css';
import '../../css/a/atb3k23ro.css';
import '../../css/f/fwuicyddt.css';
import '../../css/u/u-tk08bep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="dp04q_i-b"/><path class="atb3k23ro wm-a"/><path class="fwuicyddt wm-k"/><path class="u-tk08bep wm-a"/></g>`,
		"fallback": "withicons:choco-strawberry-sketch",
	});
}

export default Component;
