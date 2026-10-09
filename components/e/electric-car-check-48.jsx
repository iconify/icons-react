import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfdfq4bue.css';
import '../../css/i/iaalw5bbu.css';
import '../../css/p/py4nxfbnh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfdfq4bue"/><path class="iaalw5bbu"/><path class="py4nxfbnh"/>`,
		"fallback": "energy-icons:electric-car-check-48",
	});
}

export default Component;
