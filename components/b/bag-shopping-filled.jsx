import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w_mp-xmba.css';
import '../../css/x/xo2e8ob7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w_mp-xmba"/><path class="xo2e8ob7g"/></g>`,
		"fallback": "reicon:bag-shopping-filled",
	});
}

export default Component;
