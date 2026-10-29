import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/e7ro99b2e.css';
import '../../css/h/hsx_6qbkq.css';
import '../../css/l/l8de7v3ap.css';
import '../../css/z/z3dj8te5n.css';
import '../../css/l/l0axfdcpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="e7ro99b2e wm-deco"/><path class="hsx_6qbkq wm-deco"/><path class="l8de7v3ap wm-deco"/><path class="wm-k z3dj8te5n"/><path class="l0axfdcpe wm-a"/></g>`,
		"fallback": "withicons:dhak-blueprint",
	});
}

export default Component;
