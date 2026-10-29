import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/v2cf8pb4t.css';
import '../../css/c/cf0yg0eqb.css';
import '../../css/v/vxpkff8wf.css';
import '../../css/w/wzj--9dxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="v2cf8pb4t wm-deco"/><path class="cf0yg0eqb wm-deco"/><path class="vxpkff8wf wm-k"/><path class="wm-a wzj--9dxv"/></g>`,
		"fallback": "withicons:croissant-blueprint",
	});
}

export default Component;
