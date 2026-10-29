import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dmyvzab5e.css';
import '../../css/e/erd2ikbxb.css';
import '../../css/q/qb25wmb8h.css';
import '../../css/v/v88yprb2l.css';
import '../../css/t/tf4p9tbpy.css';
import '../../css/l/l950yrb2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="dmyvzab5e"/><path class="erd2ikbxb wm-a"/><path class="qb25wmb8h"/><path class="v88yprb2l wm-a"/><path class="tf4p9tbpy"/><path class="l950yrb2b wm-a"/></g>`,
		"fallback": "withicons:chart-candlestick",
	});
}

export default Component;
