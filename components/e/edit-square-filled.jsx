import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h30gn02vg.css';
import '../../css/y/ygnl5bbyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h30gn02vg"/><path class="ygnl5bbyw"/></g>`,
		"fallback": "griddy-icons:edit-square-filled",
	});
}

export default Component;
