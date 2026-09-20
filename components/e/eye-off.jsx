import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v32ch_s6q.css';
import '../../css/r/rt9zs7bvl.css';
import '../../css/p/p3ifo4qzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v32ch_s6q"/><path class="rt9zs7bvl"/><path class="p3ifo4qzn"/></g>`,
		"fallback": "proicons:eye-off",
	});
}

export default Component;
