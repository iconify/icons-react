import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/d3llpwbcn.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/m/mzsw-jb7t.css';
import '../../css/q/q2vml8hwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="d3llpwbcn wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="mzsw-jb7t wm-k"/><path class="q2vml8hwc wm-a"/></g>`,
		"fallback": "withicons:clipboard-blueprint",
	});
}

export default Component;
