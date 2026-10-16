import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkwqbs4aq.css';
import '../../css/b/bmaufsk4c.css';
import '../../css/q/qhryiubzj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkwqbs4aq"/><path class="bmaufsk4c"/><path class="qhryiubzj"/>`,
		"fallback": "energy-icons:filter-x-48",
	});
}

export default Component;
