import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h43e48bgp.css';
import '../../css/r/r8v8d6bbm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h43e48bgp"/><path class="r8v8d6bbm"/>`,
		"fallback": "energy-icons:electric-boiler-48",
	});
}

export default Component;
