import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gvc4-q3nz.css';
import '../../css/k/kc6h7sfrj.css';
import '../../css/a/aw-y4ebmh.css';
import '../../css/k/kateb-bmf.css';
import '../../css/w/w9t-1zb-m.css';
import '../../css/g/g71c4bbqi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="gvc4-q3nz"/><path class="kc6h7sfrj"/><path class="aw-y4ebmh"/><path class="kateb-bmf"/><circle class="w9t-1zb-m"/><path class="g71c4bbqi"/></g>`,
		"fallback": "icon-park:bell-ring",
	});
}

export default Component;
