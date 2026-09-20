import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv-71ub5e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv-71ub5e"><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="1440 256 256; 0 256 256"/></path>`,
		"fallback": "meteocons:hurricane",
	});
}

export default Component;
