import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5my0obpu.css';
import '../../css/k/klvygvcib.css';
import '../../css/h/ht3z8-bqi.css';
import '../../css/u/ufkydepom.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGoOdOYdcI" x1="-15.53" x2="90.53" y1="90.53" y2="-15.53" gradientTransform="scale(1.70667)" gradientUnits="userSpaceOnUse"><stop offset="0" class="e5my0obpu"/><stop offset="1" class="klvygvcib"/></linearGradient></defs><path fill="url(#SVGoOdOYdcI)" class="ht3z8-bqi prefix__cls-1"/><path class="prefix__cls-2 ufkydepom"/>`,
		"fallback": "devicon:dynamodb",
	});
}

export default Component;
