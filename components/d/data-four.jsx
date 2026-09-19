import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/q/q97o_r-5j.css';
import '../../css/e/e-1d_hbzm.css';
import '../../css/x/xguidxbuf.css';
import '../../css/e/epln-tbju.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><ellipse class="q97o_r-5j"/><path class="e-1d_hbzm"/><path class="xguidxbuf"/><path class="epln-tbju"/></g>`,
		"fallback": "icon-park:data-four",
	});
}

export default Component;
