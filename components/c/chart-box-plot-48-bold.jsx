import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpel3hezc.css';
import '../../css/k/kii22qb0u.css';
import '../../css/b/bf_bk4tou.css';
import '../../css/z/zeg382bds.css';
import '../../css/p/pjuc1jbdi.css';
import '../../css/p/pvrcl3qql.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpel3hezc"/><path class="kii22qb0u"/><path class="bf_bk4tou"/><path class="zeg382bds"/><path class="pjuc1jbdi"/><path class="pvrcl3qql"/>`,
		"fallback": "energy-icons:chart-box-plot-48-bold",
	});
}

export default Component;
