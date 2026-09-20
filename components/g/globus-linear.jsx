import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/is50_kbwq.css';
import '../../css/i/ihd0-dkdb.css';
import '../../css/a/abt8iuu-m.css';
import '../../css/k/k3g5je5gb.css';
import '../../css/k/kk05o5b_l.css';
import '../../css/z/zhgqgje4f.css';
import '../../css/e/ek8qykb_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="is50_kbwq"/><path class="ihd0-dkdb"/><path class="abt8iuu-m"/><path class="k3g5je5gb"/><path class="kk05o5b_l"/><path class="zhgqgje4f"/><path class="ek8qykb_o"/></g>`,
		"fallback": "solar:globus-linear",
	});
}

export default Component;
