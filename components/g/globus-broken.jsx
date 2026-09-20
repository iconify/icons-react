import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mup5zeb-t.css';
import '../../css/k/kk05o5b_l.css';
import '../../css/z/zhgqgje4f.css';
import '../../css/e/ek8qykb_o.css';
import '../../css/o/o9a0il3ys.css';
import '../../css/a/abt8iuu-m.css';
import '../../css/k/k3g5je5gb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mup5zeb-t"/><path class="kk05o5b_l"/><path class="zhgqgje4f"/><path class="ek8qykb_o"/><path class="o9a0il3ys"/><path class="abt8iuu-m"/><path class="k3g5je5gb"/></g>`,
		"fallback": "solar:globus-broken",
	});
}

export default Component;
