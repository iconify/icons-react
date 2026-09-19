import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/hnvuykb_n.css';
import '../../css/e/e-1d_hbzm.css';
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
		"content": `<g class="rggfaqb6e"><ellipse class="hnvuykb_n"/><path class="e-1d_hbzm"/><path class="xguidxbuf"/><path class="kegusjbbi"/></g>`,
		"fallback": "icon-park:data-one",
	});
}

export default Component;
