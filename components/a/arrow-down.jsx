import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sstdoybvp.css';
import '../../css/g/gbof0_b6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sstdoybvp"/><path class="gbof0_b6p"/></g>`,
		"fallback": "mage:arrow-down",
	});
}

export default Component;
