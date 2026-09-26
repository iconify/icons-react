import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qmt49hbjl.css';
import '../../css/q/qv3eynb2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qmt49hbjl"/><path class="qv3eynb2i"/></g>`,
		"fallback": "solar:chevrons-down-up-bold",
	});
}

export default Component;
