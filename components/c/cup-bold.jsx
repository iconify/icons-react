import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hy0wlvbcc.css';
import '../../css/n/ndzvk7pha.css';
import '../../css/w/wbpww_52o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hy0wlvbcc"/><path class="ndzvk7pha"/><path clip-rule="evenodd" class="wbpww_52o"/></g>`,
		"fallback": "solar:cup-bold",
	});
}

export default Component;
