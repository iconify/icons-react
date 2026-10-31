import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/exb06rbxz.css';
import '../../css/u/utvepycrw.css';
import '../../css/w/wdpljiudh.css';
import '../../css/p/pg87ictwl.css';
import '../../css/a/amsnl683r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="exb06rbxz wm-k"/><path class="utvepycrw wm-deco"/><path class="wdpljiudh wm-k"/><path class="pg87ictwl wm-k"/><path class="amsnl683r wm-shadow"/></g>`,
		"fallback": "withicons-valentine:coffin",
	});
}

export default Component;
