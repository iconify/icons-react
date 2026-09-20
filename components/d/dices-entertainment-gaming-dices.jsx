import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/v/vxb472q1c.css';
import '../../css/p/pboph_eko.css';
import '../../css/g/gur5w4bsp.css';
import '../../css/x/xgf-71b_m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="vxb472q1c"/><path class="pboph_eko"/><path class="gur5w4bsp"/><path class="xgf-71b_m"/></g>`,
		"fallback": "streamline-plump:dices-entertainment-gaming-dices",
	});
}

export default Component;
