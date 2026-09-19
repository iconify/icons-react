import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/r2pi-9bvu.css';
import '../../css/b/bg_u5bb7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="r2pi-9bvu"/><path class="bg_u5bb7c"/></g>`,
		"fallback": "hugeicons:chart-bar-line",
	});
}

export default Component;
