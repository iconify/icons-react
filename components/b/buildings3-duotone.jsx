import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w72fq3cev.css';
import '../../css/g/g_6c7be5d.css';
import '../../css/m/m9-0_tbam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w72fq3cev"/><path class="g_6c7be5d"/><path class="m9-0_tbam"/></g>`,
		"fallback": "reicon:buildings3-duotone",
	});
}

export default Component;
