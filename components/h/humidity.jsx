import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4f5e1b5a.css';
import '../../css/c/cphannb6b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><symbol id="SVGsr3YqdGo" viewBox="0 0 175 260.9"><path class="i4f5e1b5a"><animateTransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="scale" values="1 1; 1 .9; 1 1"/></path></symbol></defs><use width="175" height="260.9" href="#SVGsr3YqdGo" transform="translate(168.4 123.18)"/><path class="cphannb6b"/>`,
		"fallback": "meteocons:humidity",
	});
}

export default Component;
