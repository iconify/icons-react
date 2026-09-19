import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cdbobfbnn.css';
import '../../css/r/rw56-0bah.css';
import '../../css/u/unxbqqbkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cdbobfbnn"/><path class="rw56-0bah"/><path class="unxbqqbkm"/></g>`,
		"fallback": "hugeicons:eye-off",
	});
}

export default Component;
