import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nwsdxnbxa.css';
import '../../css/q/q7ls_zbzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nwsdxnbxa"/><path class="q7ls_zbzh"/></g>`,
		"fallback": "solar:add-folder-bold-duotone",
	});
}

export default Component;
