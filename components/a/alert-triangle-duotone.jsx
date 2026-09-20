import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hffdgibkh.css';
import '../../css/n/nibhs1b3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hffdgibkh"/><path class="nibhs1b3q"/></g>`,
		"fallback": "reicon:alert-triangle-duotone",
	});
}

export default Component;
