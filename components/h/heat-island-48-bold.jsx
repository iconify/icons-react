import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m810bccve.css';
import '../../css/s/s4bn_vbze.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m810bccve"/><path class="s4bn_vbze"/>`,
		"fallback": "energy-icons:heat-island-48-bold",
	});
}

export default Component;
