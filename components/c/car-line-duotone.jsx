import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nprlq4buh.css';
import '../../css/p/pjhn9z46b.css';
import '../../css/f/fzmgkeb5d.css';
import '../../css/o/o51-vo4fy.css';
import '../../css/t/tf5n4ib8z.css';
import '../../css/g/g-t4_esiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nprlq4buh"/><path class="pjhn9z46b"/><path class="fzmgkeb5d"/><path class="o51-vo4fy"/><path class="tf5n4ib8z"/><path class="g-t4_esiq"/></g>`,
		"fallback": "solar:car-line-duotone",
	});
}

export default Component;
