import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xo92bc77w.css';
import '../../css/l/lju0libaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xo92bc77w"/><path class="lju0libaf"/></g>`,
		"fallback": "reicon:directbox-notif-filled",
	});
}

export default Component;
