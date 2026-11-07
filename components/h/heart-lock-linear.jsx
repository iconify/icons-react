import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/un29iqbuk.css';
import '../../css/f/fuprorb1g.css';
import '../../css/r/r5lvzac_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="un29iqbuk"/><path class="fuprorb1g"/><path class="r5lvzac_c"/></g>`,
		"fallback": "solar:heart-lock-linear",
	});
}

export default Component;
