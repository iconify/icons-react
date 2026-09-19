import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/b/b_xcdrb_v.css';
import '../../css/r/ry3_5bcyh.css';
import '../../css/l/l-hwvdbfr.css';
import '../../css/y/yl0pxlb1c.css';
import '../../css/s/szvtq6bhg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="b_xcdrb_v"/><path class="ry3_5bcyh"/><path class="l-hwvdbfr"/><path class="yl0pxlb1c"/><path class="szvtq6bhg"/></g>`,
		"fallback": "icon-park:find",
	});
}

export default Component;
