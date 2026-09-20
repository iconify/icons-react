import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uo7x6hg1c.css';
import '../../css/c/cx-2gdcyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uo7x6hg1c"/><path class="cx-2gdcyc"/></g>`,
		"fallback": "reicon:cart-large4-duotone",
	});
}

export default Component;
