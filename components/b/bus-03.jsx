import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qg-iftbdx.css';
import '../../css/t/t0sl4gbot.css';
import '../../css/g/gtwrmobtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qg-iftbdx"/><path class="t0sl4gbot"/><path class="gtwrmobtc"/></g>`,
		"fallback": "hugeicons:bus-03",
	});
}

export default Component;
