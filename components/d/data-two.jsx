import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/q/q97o_r-5j.css';
import '../../css/g/goq_u1v7h.css';
import '../../css/x/xguidxbuf.css';
import '../../css/k/kegusjbbi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><ellipse class="q97o_r-5j"/><path class="goq_u1v7h"/><path class="xguidxbuf"/><path class="kegusjbbi"/></g>`,
		"fallback": "icon-park:data-two",
	});
}

export default Component;
