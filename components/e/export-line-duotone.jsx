import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/myq4vybmx.css';
import '../../css/x/x_hpbztkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="myq4vybmx"/><path class="x_hpbztkk"/></g>`,
		"fallback": "solar:export-line-duotone",
	});
}

export default Component;
