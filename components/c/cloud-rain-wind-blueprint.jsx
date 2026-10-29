import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/w-3060b4k.css';
import '../../css/i/ies3f1bwm.css';
import '../../css/p/puh_7bb0r.css';
import '../../css/u/us9qbxizz.css';
import '../../css/r/rad68db9z.css';
import '../../css/e/e5h10r5es.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="w-3060b4k wm-deco"/><path class="ies3f1bwm wm-deco"/><path class="puh_7bb0r wm-deco"/><path class="us9qbxizz wm-k"/><path class="rad68db9z wm-a"/><path class="e5h10r5es wm-k"/></g>`,
		"fallback": "withicons:cloud-rain-wind-blueprint",
	});
}

export default Component;
