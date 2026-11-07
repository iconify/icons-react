import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aa0ewkb8e.css';
import '../../css/i/i-vl_3bog.css';
import '../../css/o/ozdm5k_ze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="aa0ewkb8e"/><path class="i-vl_3bog"/><path class="ozdm5k_ze"/></g>`,
		"fallback": "solar:airbuds-case-line-duotone",
	});
}

export default Component;
