import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6eu_k3xl.css';
import '../../css/f/f9l75pbbf.css';
import '../../css/q/q736ljmrr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6eu_k3xl"/><path class="f9l75pbbf"/><path class="q736ljmrr"/>`,
		"fallback": "energy-icons:carbon-offset-48-bold",
	});
}

export default Component;
