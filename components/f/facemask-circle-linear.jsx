import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/k/kmnr8jx4o.css';
import '../../css/c/c61vhgbib.css';
import '../../css/l/l_ep1oxqq.css';
import '../../css/r/r0padj4iz.css';
import '../../css/w/wbw_ixbrw.css';
import '../../css/y/yad62e0rw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><circle class="kmnr8jx4o"/><path class="c61vhgbib"/><path class="l_ep1oxqq"/><path class="r0padj4iz"/><path class="wbw_ixbrw"/><ellipse class="yad62e0rw"/></g>`,
		"fallback": "solar:facemask-circle-linear",
	});
}

export default Component;
