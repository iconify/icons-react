import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i2p-_hbwz.css';
import '../../css/x/x_hpbztkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i2p-_hbwz"/><path class="x_hpbztkk"/></g>`,
		"fallback": "solar:export-linear",
	});
}

export default Component;
