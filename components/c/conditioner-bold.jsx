import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l4-8uwvku.css';
import '../../css/v/vl9-uiboj.css';
import '../../css/f/folbbn6nl.css';
import '../../css/z/zt9_sjbee.css';
import '../../css/x/xncwnzuom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="l4-8uwvku"/><path clip-rule="evenodd" class="vl9-uiboj"/><path clip-rule="evenodd" class="folbbn6nl"/><path clip-rule="evenodd" class="zt9_sjbee"/><path class="xncwnzuom"/></g>`,
		"fallback": "solar:conditioner-bold",
	});
}

export default Component;
