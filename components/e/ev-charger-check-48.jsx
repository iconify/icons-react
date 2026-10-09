import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_60udxbz.css';
import '../../css/d/dpwi3bccu.css';
import '../../css/p/p7kyn66pi.css';
import '../../css/i/ib8r12brx.css';
import '../../css/p/py4nxfbnh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_60udxbz"/><path class="dpwi3bccu"/><path class="p7kyn66pi"/><path class="ib8r12brx"/><path class="py4nxfbnh"/>`,
		"fallback": "energy-icons:ev-charger-check-48",
	});
}

export default Component;
