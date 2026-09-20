import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nznc4b-_b.css';
import '../../css/d/d0hjbxb_s.css';
import '../../css/q/qxp35eoni.css';
import '../../css/e/efgrho4lb.css';
import '../../css/j/jvc47cgpn.css';
import '../../css/a/ajb_5606c.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/m/m2n_o3bwm.css';
import '../../css/q/qb0jxlbxd.css';
import '../../css/o/o1hzj7b1g.css';
import '../../css/u/ue16zrb8f.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nznc4b-_b"/><rect class="d0hjbxb_s"/><circle class="qxp35eoni"/><path class="efgrho4lb"/><path class="jvc47cgpn"/><path class="ajb_5606c"/><g class="brzn_0bpr"><path class="m2n_o3bwm"/><circle class="qb0jxlbxd"/><path class="o1hzj7b1g"/><path class="ue16zrb8f"/></g>`,
		"fallback": "openmoji:colossus-of-rhodes",
	});
}

export default Component;
