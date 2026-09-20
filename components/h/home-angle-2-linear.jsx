import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pcw-d7b1r.css';
import '../../css/r/rcnks01sd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pcw-d7b1r"/><path class="rcnks01sd"/></g>`,
		"fallback": "solar:home-angle-2-linear",
	});
}

export default Component;
