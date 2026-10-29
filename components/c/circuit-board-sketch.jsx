import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/p02usd09d.css';
import '../../css/d/di-npsbsf.css';
import '../../css/e/e9s7nacvv.css';
import '../../css/y/ydrhx_bvj.css';
import '../../css/x/xl0su_7tq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="p02usd09d"/><path class="di-npsbsf wm-k"/><path class="e9s7nacvv wm-k"/><path class="wm-a ydrhx_bvj"/><path class="wm-a xl0su_7tq"/></g>`,
		"fallback": "withicons:circuit-board-sketch",
	});
}

export default Component;
