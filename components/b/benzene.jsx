import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nw_5ypmmk.css';
import '../../css/m/ma1jtk5wi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nw_5ypmmk"/><path clip-rule="evenodd" class="ma1jtk5wi"/></g>`,
		"fallback": "reicon:benzene",
	});
}

export default Component;
