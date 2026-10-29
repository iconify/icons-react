import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/sp_mmnh0l.css';
import '../../css/n/nylww15uo.css';
import '../../css/t/t218te2ox.css';
import '../../css/r/r2v_q5qdx.css';
import '../../css/t/t3r3bvyth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="sp_mmnh0l wm-deco"/><path class="nylww15uo wm-deco"/><path class="t218te2ox wm-deco"/><path class="r2v_q5qdx wm-k"/><path class="t3r3bvyth wm-a"/></g>`,
		"fallback": "withicons:hexagon-blueprint",
	});
}

export default Component;
