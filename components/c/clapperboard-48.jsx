import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s23avd-hl.css';
import '../../css/l/l8dg_3bcm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s23avd-hl"/><path class="l8dg_3bcm"/>`,
		"fallback": "energy-icons:clapperboard-48",
	});
}

export default Component;
