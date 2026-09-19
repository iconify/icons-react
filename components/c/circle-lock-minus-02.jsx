import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mmcdf2b7r.css';
import '../../css/u/ue3e5g9-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mmcdf2b7r"/><path class="ue3e5g9-c"/></g>`,
		"fallback": "hugeicons:circle-lock-minus-02",
	});
}

export default Component;
