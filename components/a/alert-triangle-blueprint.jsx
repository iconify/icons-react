import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/alfbd7bhz.css';
import '../../css/r/rmm_7dbim.css';
import '../../css/j/jkj98vkgf.css';
import '../../css/m/m3y59dfla.css';
import '../../css/l/llod8s1is.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="alfbd7bhz wm-deco"/><path class="rmm_7dbim wm-deco"/><path class="jkj98vkgf wm-deco"/><path class="m3y59dfla wm-k"/><path class="llod8s1is wm-a"/></g>`,
		"fallback": "withicons:alert-triangle-blueprint",
	});
}

export default Component;
