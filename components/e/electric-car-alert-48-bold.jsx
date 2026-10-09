import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q70ah7b4t.css';
import '../../css/g/ggzqnruty.css';
import '../../css/h/hwjgqrbah.css';
import '../../css/u/u9s9akrzi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q70ah7b4t"/><path class="ggzqnruty"/><path class="hwjgqrbah"/><path class="u9s9akrzi"/>`,
		"fallback": "energy-icons:electric-car-alert-48-bold",
	});
}

export default Component;
