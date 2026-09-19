import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xikknb5pn.css';
import '../../css/f/fp0qfxbzq.css';
import '../../css/o/ohu8q1bbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xikknb5pn"/><path class="fp0qfxbzq"/><path class="ohu8q1bbk"/></g>`,
		"fallback": "hugeicons:import",
	});
}

export default Component;
