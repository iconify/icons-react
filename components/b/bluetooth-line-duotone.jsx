import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kja0_8b-p.css';
import '../../css/h/hbv47lb9l.css';
import '../../css/f/fcaf33b7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kja0_8b-p"/><path class="hbv47lb9l"/><path class="fcaf33b7q"/></g>`,
		"fallback": "solar:bluetooth-line-duotone",
	});
}

export default Component;
