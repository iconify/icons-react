import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/xeopvvbys.css';
import '../../css/k/k5n2fya3g.css';
import '../../css/r/r1yzrf19m.css';
import '../../css/n/nw0ur9bef.css';
import '../../css/r/rw4xbp_fn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco xeopvvbys"/><path class="k5n2fya3g wm-deco"/><path class="r1yzrf19m wm-deco"/><path class="nw0ur9bef wm-k"/><path class="rw4xbp_fn wm-a"/></g>`,
		"fallback": "withicons:avatar-dog-blueprint",
	});
}

export default Component;
