import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m30is0msy.css';
import '../../css/q/qhz72-bbk.css';
import '../../css/s/somstlbkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="m30is0msy"/><path class="qhz72-bbk"/><path class="somstlbkg"/></g>`,
		"fallback": "hugeicons:installing-updates-01",
	});
}

export default Component;
