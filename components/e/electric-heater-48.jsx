import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ct4ocpbvr.css';
import '../../css/z/z8jdvhb0u.css';
import '../../css/j/j3nhhey8u.css';
import '../../css/r/rwguvv37h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ct4ocpbvr"/><path class="z8jdvhb0u"/><path class="j3nhhey8u"/><path class="rwguvv37h"/>`,
		"fallback": "energy-icons:electric-heater-48",
	});
}

export default Component;
