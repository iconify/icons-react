import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/pqr3i4bwp.css';
import '../../css/v/v3d4ftbhi.css';
import '../../css/j/jbrc89-yx.css';
import '../../css/s/s-1pw_b_u.css';
import '../../css/z/zawcaob5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="pqr3i4bwp wm-deco"/><path class="v3d4ftbhi wm-deco"/><path class="jbrc89-yx wm-deco"/><path class="s-1pw_b_u"/><path class="zawcaob5w"/></g>`,
		"fallback": "withicons:choco-strawberry-blueprint",
	});
}

export default Component;
