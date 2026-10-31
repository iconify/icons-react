import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g17dkubet.css';
import '../../css/r/r3l-ombim.css';
import '../../css/t/t4dredm1h.css';
import '../../css/b/b5089wbcr.css';
import '../../css/y/ya-xp3btk.css';
import '../../css/p/psdddnbdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g17dkubet wm-k"/><path class="r3l-ombim wm-deco"/><path class="t4dredm1h wm-k"/><path class="b5089wbcr wm-shadow"/><path class="wm-shine ya-xp3btk"/><path class="psdddnbdb wm-shine"/></g>`,
		"fallback": "withicons-valentine:basketball",
	});
}

export default Component;
