import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/xq0utbb8u.css';
import '../../css/j/jxymbib5n.css';
import '../../css/q/qpw_nlblc.css';
import '../../css/u/ubs9o-b0t.css';
import '../../css/h/h0aiknbwr.css';
import '../../css/z/zwlrnobak.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="xq0utbb8u"/><path class="jxymbib5n"/><path class="qpw_nlblc"/><path class="ubs9o-b0t"/><path class="h0aiknbwr"/><path class="zwlrnobak"/></g>`,
		"fallback": "icon-park:bank",
	});
}

export default Component;
