import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/g/gzzfver2g.css';
import '../../css/l/lmcd7tbtm.css';
import '../../css/q/qhsvy0bse.css';
import '../../css/m/mt6cl9exl.css';
import '../../css/x/x9_brz1gw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="gzzfver2g"/><path class="lmcd7tbtm"/><path class="qhsvy0bse"/><path class="mt6cl9exl"/><path class="x9_brz1gw"/></g>`,
		"fallback": "streamline-ultimate:fiber-access-1",
	});
}

export default Component;
