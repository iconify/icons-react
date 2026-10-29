import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dqywfr4sz.css';
import '../../css/o/oj5c48bry.css';
import '../../css/t/tf3d3bb_b.css';
import '../../css/z/zoxatjh8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="dqywfr4sz"/><path class="oj5c48bry wm-k"/><path class="tf3d3bb_b wm-k"/><path class="wm-a zoxatjh8c"/></g>`,
		"fallback": "withicons:chocolate-box-sketch",
	});
}

export default Component;
