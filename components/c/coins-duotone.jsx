import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vz49qzbvl.css';
import '../../css/b/b-zkx-bri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary vz49qzbvl"/><path class="b-zkx-bri primary"/></g>`,
		"fallback": "iconaut:coins-duotone",
	});
}

export default Component;
