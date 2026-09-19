import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zm05irqkc.css';
import '../../css/x/xk7kdmbbm.css';
import '../../css/d/dj_gt0_ae.css';
import '../../css/m/mfu9-r3xj.css';
import '../../css/z/zq54otbvn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="zm05irqkc"/><rect class="xk7kdmbbm"/><circle class="dj_gt0_ae"/><path class="mfu9-r3xj"/><rect class="zq54otbvn"/></g>`,
		"fallback": "icon-park:gopro",
	});
}

export default Component;
