import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/dcji21j2y.css';
import '../../css/s/s8x38vm7v.css';
import '../../css/x/xj_5df-dn.css';
import '../../css/e/e-m_ijoye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="dcji21j2y wm-deco"/><path class="s8x38vm7v wm-deco"/><path class="wm-k xj_5df-dn"/><path class="e-m_ijoye wm-a"/></g>`,
		"fallback": "withicons:frown-blueprint",
	});
}

export default Component;
