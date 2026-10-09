import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfdfq4bue.css';
import '../../css/i/iaalw5bbu.css';
import '../../css/b/bxzxb8v8d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfdfq4bue"/><path class="iaalw5bbu"/><path class="bxzxb8v8d"/>`,
		"fallback": "energy-icons:electric-car-alert-48",
	});
}

export default Component;
