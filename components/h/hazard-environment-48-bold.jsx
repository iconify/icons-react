import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2mjsubix.css';
import '../../css/e/e_l_xltow.css';
import '../../css/k/ksirhhagl.css';
import '../../css/h/hwl24odwp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2mjsubix"/><path class="e_l_xltow"/><path class="ksirhhagl"/><path class="hwl24odwp"/>`,
		"fallback": "energy-icons:hazard-environment-48-bold",
	});
}

export default Component;
