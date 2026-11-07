import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s52_f-6da.css';
import '../../css/m/mbetw1bgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s52_f-6da"/><path class="mbetw1bgk"/></g>`,
		"fallback": "solar:display-line-duotone",
	});
}

export default Component;
