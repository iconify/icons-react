import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hxb-2wbwc.css';
import '../../css/c/co72ufrpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hxb-2wbwc"/><path class="co72ufrpo"/></g>`,
		"fallback": "reicon:ghost-duotone",
	});
}

export default Component;
