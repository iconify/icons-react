import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y0emr6j5v.css';
import '../../css/a/awz1qr1sm.css';
import '../../css/g/gg51fnb0j.css';
import '../../css/r/rultmacqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="y0emr6j5v"/><path class="awz1qr1sm"/><path class="gg51fnb0j"/><path class="rultmacqq"/></g>`,
		"fallback": "solar:blocks-linear",
	});
}

export default Component;
