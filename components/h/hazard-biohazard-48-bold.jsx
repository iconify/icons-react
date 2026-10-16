import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2mjsubix.css';
import '../../css/p/p5jryccsb.css';
import '../../css/y/y76vbmdhx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2mjsubix"/><path class="p5jryccsb"/><path class="y76vbmdhx"/>`,
		"fallback": "energy-icons:hazard-biohazard-48-bold",
	});
}

export default Component;
