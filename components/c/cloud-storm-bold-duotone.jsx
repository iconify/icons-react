import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j9z_racon.css';
import '../../css/s/spsi6z36x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="j9z_racon"/><path class="spsi6z36x"/></g>`,
		"fallback": "solar:cloud-storm-bold-duotone",
	});
}

export default Component;
