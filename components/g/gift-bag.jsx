import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/a/a459j710d.css';
import '../../css/r/rkm-xfb-q.css';
import '../../css/p/ppcrud4jg.css';
import '../../css/t/t0-jhwb6f.css';
import '../../css/w/w2clp_a8v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><rect class="a459j710d"/><path class="rkm-xfb-q"/><circle class="ppcrud4jg"/><circle class="t0-jhwb6f"/><path class="w2clp_a8v"/></g>`,
		"fallback": "icon-park-solid:gift-bag",
	});
}

export default Component;
