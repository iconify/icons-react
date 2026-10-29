import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/lc2i193pv.css';
import '../../css/p/p_z3d3ben.css';
import '../../css/d/djjku1boi.css';
import '../../css/w/wqew5lbct.css';
import '../../css/s/seg39wnmx.css';
import '../../css/j/j6rnjebwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="lc2i193pv wm-shadow"/><path class="p_z3d3ben"/><path class="djjku1boi"/><path class="wqew5lbct"/><path class="seg39wnmx wm-shine"/><path class="j6rnjebwe wm-deco"/></g>`,
		"fallback": "withicons-sticker:clipboard-plus",
	});
}

export default Component;
