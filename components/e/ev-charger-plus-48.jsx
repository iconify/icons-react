import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_60udxbz.css';
import '../../css/d/dpwi3bccu.css';
import '../../css/p/p7kyn66pi.css';
import '../../css/i/ib8r12brx.css';
import '../../css/v/v-3r9t8cb.css';
import '../../css/c/cal94qbrf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_60udxbz"/><path class="dpwi3bccu"/><path class="p7kyn66pi"/><path class="ib8r12brx"/><path class="v-3r9t8cb"/><path class="cal94qbrf"/>`,
		"fallback": "energy-icons:ev-charger-plus-48",
	});
}

export default Component;
