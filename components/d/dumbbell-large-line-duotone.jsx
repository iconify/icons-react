import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mp_8fz5ge.css';
import '../../css/d/dgzasb7gz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mp_8fz5ge"/><path class="dgzasb7gz"/></g>`,
		"fallback": "solar:dumbbell-large-line-duotone",
	});
}

export default Component;
