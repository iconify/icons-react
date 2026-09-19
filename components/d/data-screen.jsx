import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/pmazflpze.css';
import '../../css/b/b5yxc2b_y.css';
import '../../css/t/t5aws7bsx.css';
import '../../css/e/e0_pf_bxs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><rect class="pmazflpze"/><path class="b5yxc2b_y"/><circle class="t5aws7bsx"/><circle class="e0_pf_bxs"/></g>`,
		"fallback": "icon-park-outline:data-screen",
	});
}

export default Component;
