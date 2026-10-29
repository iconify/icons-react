import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/byrlvt0tu.css';
import '../../css/p/pv3ygdb6v.css';
import '../../css/b/bj4zq-rab.css';
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
		"content": `<g class="tczw_hbsg"><path class="byrlvt0tu wm-k"/><path class="pv3ygdb6v wm-a"/><path class="bj4zq-rab wm-shadow"/><path class="dmyvzab5e wm-k"/><path class="erd2ikbxb wm-a"/><path class="qb25wmb8h wm-k"/><path class="v88yprb2l wm-a"/><path class="tf4p9tbpy wm-k"/><path class="l950yrb2b wm-a"/></g>`,
		"fallback": "withicons:chart-candlestick-engrave",
	});
}

export default Component;
