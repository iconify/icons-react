import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gat_hpb4y.css';
import '../../css/z/z1a8wvb0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gat_hpb4y"/><path class="z1a8wvb0h"/></g>`,
		"fallback": "mynaui:campfire-solid",
	});
}

export default Component;
