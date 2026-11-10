import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r8ghs0mql.css';
import '../../css/z/z45xtacjv.css';
import '../../css/r/rdzg30y3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r8ghs0mql"/><path class="z45xtacjv"/><path class="rdzg30y3m"/></g>`,
		"fallback": "andrsrxn:device-phone-sparkle",
	});
}

export default Component;
