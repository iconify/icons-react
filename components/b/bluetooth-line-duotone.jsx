import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t-vbe6pbb.css';
import '../../css/h/h_wxks0bq.css';
import '../../css/f/fcaf33b7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="t-vbe6pbb"/><path class="h_wxks0bq"/><path class="fcaf33b7q"/></g>`,
		"fallback": "solar:bluetooth-line-duotone",
	});
}

export default Component;
