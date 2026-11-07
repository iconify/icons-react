import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kmybgh8wb.css';
import '../../css/k/kk05o5b_l.css';
import '../../css/z/zhgqgje4f.css';
import '../../css/e/ek8qykb_o.css';
import '../../css/o/o9a0il3ys.css';
import '../../css/m/mnp2t7kvq.css';
import '../../css/k/k3g5je5gb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kmybgh8wb"/><path class="kk05o5b_l"/><path class="zhgqgje4f"/><path class="ek8qykb_o"/><path class="o9a0il3ys"/><path class="mnp2t7kvq"/><path class="k3g5je5gb"/></g>`,
		"fallback": "solar:globe-broken",
	});
}

export default Component;
