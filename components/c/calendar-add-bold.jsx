import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s8zvn4tvb.css';
import '../../css/n/nx6fohbri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s8zvn4tvb"/><path clip-rule="evenodd" class="nx6fohbri"/></g>`,
		"fallback": "solar:calendar-add-bold",
	});
}

export default Component;
