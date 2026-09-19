import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/twzr5ub1p.css';
import '../../css/w/wmfpilbnv.css';
import '../../css/x/xpes6m53l.css';
import '../../css/l/legydmb6h.css';
import '../../css/b/bp_m5mb_i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="twzr5ub1p"/><rect class="wmfpilbnv"/><path class="xpes6m53l"/><rect class="legydmb6h"/><path class="bp_m5mb_i"/></g>`,
		"fallback": "icon-park-outline:city",
	});
}

export default Component;
