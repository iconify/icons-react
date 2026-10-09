import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/meve8lt-m.css';
import '../../css/l/l4lrodbjn.css';
import '../../css/y/ywo35nt_c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="meve8lt-m"/><path class="l4lrodbjn"/><path class="ywo35nt_c"/>`,
		"fallback": "energy-icons:bell-tent-48",
	});
}

export default Component;
