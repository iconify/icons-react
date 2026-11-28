import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pa7-4evan.css';
import '../../css/d/dbkbllkcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pa7-4evan"/><path class="dbkbllkcx"/></g>`,
		"fallback": "iconaut:cpu-solid",
	});
}

export default Component;
