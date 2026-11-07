import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wi1qbk5_i.css';
import '../../css/k/kt6370brf.css';
import '../../css/b/bvwkol5hk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wi1qbk5_i"/><path class="kt6370brf"/><path class="bvwkol5hk"/></g>`,
		"fallback": "solar:broom-linear",
	});
}

export default Component;
