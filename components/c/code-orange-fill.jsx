import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhidh3bkp.css';
import '../../css/l/lqrjwzctw.css';
import '../../css/o/o9nusacsq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGs3R8w1QS" x1="163.5" x2="296.6" y1="185.7" y2="416.3" gradientUnits="userSpaceOnUse"><stop offset="0" class="yhidh3bkp"/><stop offset=".5" class="yhidh3bkp"/><stop offset="1" class="lqrjwzctw"/></linearGradient></defs><path fill="url(#SVGs3R8w1QS)" class="o9nusacsq"/>`,
		"fallback": "meteocons:code-orange-fill",
	});
}

export default Component;
