import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/ji7z9becj.css';
import '../../css/k/kt6370brf.css';
import '../../css/p/p7xp9ghjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ji7z9becj"/><path class="kt6370brf"/><path class="p7xp9ghjn"/></g>`,
		"fallback": "solar:broom-linear",
	});
}

export default Component;
