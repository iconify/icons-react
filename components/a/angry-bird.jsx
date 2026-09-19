import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e7s3h_45j.css';
import '../../css/x/x_v6dlman.css';
import '../../css/m/mg1b38bzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e7s3h_45j"/><path class="x_v6dlman"/><path class="mg1b38bzn"/></g>`,
		"fallback": "hugeicons:angry-bird",
	});
}

export default Component;
