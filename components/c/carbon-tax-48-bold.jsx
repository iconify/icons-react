import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk4s-jblr.css';
import '../../css/q/qrg4uebsq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk4s-jblr"/><path class="qrg4uebsq"/>`,
		"fallback": "energy-icons:carbon-tax-48-bold",
	});
}

export default Component;
