import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/ro7vyibyz.css';
import '../../css/l/lcxm2bc4c.css';
import '../../css/r/rasqg796i.css';
import '../../css/i/i87_9e8dl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ro7vyibyz"/><path class="lcxm2bc4c"/><path class="rasqg796i"/><path class="i87_9e8dl"/></g>`,
		"fallback": "solar:basketball-linear",
	});
}

export default Component;
