import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/srcx1769a.css';
import '../../css/p/p79g52p4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="srcx1769a"/><path class="p79g52p4i"/></g>`,
		"fallback": "solar:body-shape-bold-duotone",
	});
}

export default Component;
