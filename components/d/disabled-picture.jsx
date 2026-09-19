import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p4r3x_bfa.css';
import '../../css/n/ncl-bp61j.css';
import '../../css/k/k4liqx2ro.css';
import '../../css/o/o5uqs6wrg.css';
import '../../css/h/h51p1lbid.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p4r3x_bfa"/><path class="ncl-bp61j"/><path class="k4liqx2ro"/><circle class="o5uqs6wrg"/><path class="h51p1lbid"/></g>`,
		"fallback": "icon-park:disabled-picture",
	});
}

export default Component;
