import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kixhz1bkw.css';
import '../../css/e/ew9dhmc8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kixhz1bkw"/><path class="ew9dhmc8m"/></g>`,
		"fallback": "hugeicons:configuration-02",
	});
}

export default Component;
