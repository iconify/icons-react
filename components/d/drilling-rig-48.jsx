import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sf4atacsq.css';
import '../../css/a/anx3tw60h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sf4atacsq"/><path class="anx3tw60h"/>`,
		"fallback": "energy-icons:drilling-rig-48",
	});
}

export default Component;
