import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/snwdbzbwb.css';
import '../../css/w/wx205myud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="snwdbzbwb"/><path class="wx205myud"/></g>`,
		"fallback": "solar:filter-bold-duotone",
	});
}

export default Component;
